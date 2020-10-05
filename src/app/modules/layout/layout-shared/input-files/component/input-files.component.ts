import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { reject } from 'q';


@Component({
  selector: 'app-input-files',
  templateUrl: './input-files.component.html',
  styleUrls: ['./input-files.component.scss'],
  exportAs: 'FileList'
})

export class InputFilesComponent implements OnInit, OnDestroy {
  private _input: HTMLInputElement;
  private _validators: ((file: FileData) => Promise<boolean>)[] = [];
  // data store
  _store: FileData[] = [];

  get data(): FileData[] {
    return this._store;
  }

  get filesToUpload() {
    return this._store.filter((fileData) => !fileData.uploaded);
  }

  get uploadedUrls() {
    return this._store.filter((fileData) => fileData.uploaded).map((fileData) => fileData.url);
  }

  get files(): File[] {
    return this._store.map(fileData => fileData.file);
  }

  get isFilesExceed(): boolean {
    return this.maxFiles >= this._store.length;
  }

  get hasMultiple() {
    return this._input && this._input.multiple;
  }

  isDropActive = false;
  error: string = null;
  // event when change
  @Output() stateChange = new EventEmitter<any>();
  // label
  @Input() label;
  @Input() errorMessage = 'Only image and video files are allowed';
  // multiple
  private _maxFiles = 10;
  _accept = 'image/jpeg,image/png,video/mp4';
  @Input()
  set accept(format: string) {
    this._accept = format;
    this._input.accept = format;
  }

  @Input() maxSize: number = 16;

  @Input()
  set maxFiles(count: number) {
    this._maxFiles = count;
    this._input.multiple = (count > 1);
  }

  @Input() thumbnail: boolean;

  @Input()
  set urls(_urls: string[]) {
    this._fetchImages(_urls).then((results) => {
      Promise.all(results.map(result => result.blob())).then((blobs) => {
        const store: FileData[] = [];
        blobs.forEach((blob, index: number) => {
          const file = new File([blob], 'file');
          store.push(new FileData(file, _urls[index]));
        });
        this._store = store;
        console.log(store)
      });
    });
  }

  fileChangeHandler = this.onFileChangeHandler.bind(this);
  private _canvas: HTMLCanvasElement;

  constructor(renderer: Renderer2) {
    this._canvas = renderer.createElement('canvas');
    this._input = renderer.createElement('input');
    this._input.type = 'file';
    this._input.addEventListener('change', this.fileChangeHandler, false);
  }

  onFileChangeHandler(event) {
    const target: HTMLInputElement = event.currentTarget;
    const files: FileList = target.files;
    this._fileHandler(files);
    target.value = '';
    this.stateChange.next();
  }

    _fileHandler(files: any,isSingle?) {
    for (let i = 0; i < files.length; i++) {
      const file = isSingle?files[i]:files.item(i);
      if (this._accept && this._accept.split(',').indexOf(file.type) === -1) {
        alert(this.errorMessage);
        this.error = this.errorMessage;
        return;
      } else if (this.maxSize && this.maxSize < ((file.size / 1024)/1024)) {
        alert(`File size must be less than ${this.maxSize}MB.${file.size}`);
        this.error = `File size must be less than ${this.maxSize}MB`;
        return; 
      } else if (this._store.some((fileData) => fileData.file.name === file.name)) {
        this.error = `File is already added.`;
        return;
      } else {
        this.error = null;
      }
      if (this._maxFiles && this._maxFiles < files.length) {
        alert(`No of files must be less than or equal to ${this._maxFiles}.`);
        this.error = `No of files must be less than or equal to ${this._maxFiles}.`;
        return;
      }
      const fileData = new FileData(file);
      fileData.onload.subscribe(() => {
        Promise.all(this._validators.map(fn => fn(fileData))).then((result) => {
          if (result.every(status => status)) {
            this._store.push(fileData);
          }
        }).catch((error) => {
          this.error = error;
        });
      });
    }
  }

  onCanPlayHandler(fileData: FileData, video: HTMLVideoElement) {
    this.createThumbnail(video, `${fileData.id}.png`).then((thumbnail: File) => {
      fileData.thumbnail = thumbnail;
    });
  }

  onCreateThumbnailHandler(fileData: FileData, container: HTMLDivElement) {
    const video: HTMLVideoElement = container.querySelector('video');
    // video.onloadend
    this.createThumbnail(video).then((thumbnail: File) => {
      fileData.thumbnail = thumbnail;
      // window.open()
    });
  }

  private _fetchImages(files: string[]) {
    const promiseAll = [];
    files.forEach((fileUrl) => {
      const request = new Request(fileUrl);
      promiseAll.push(fetch(request, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
      }));
    });
    return Promise.all(promiseAll);
  }

  ngOnInit(): void {

  }

  onRemoveFileHandler(file: FileData) {
    const index = this._store.indexOf(file);
    if (index !== -1) {
      this._store.splice(index, 1);
    }
    this.error = '';
    this.stateChange.emit();
  }

  onAddFileHandler() {
    this._input.click();
  }

  ngOnDestroy() {
    this._input.removeEventListener('change', this.fileChangeHandler, false);
  }

  onDragEnterHandler(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.isDropActive = true;
  }

  onDragOverHandler(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.isDropActive = true;
  }

  onDragLeaveHandler(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.isDropActive = false;
  }

  onDropHandler(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.isDropActive = false;
    this._fileHandler(event.dataTransfer.files);
  }

  reset() {
    this._store = [];
  }

  validate(validator: (file: FileData) => Promise<boolean>) {
    if (validator && typeof validator === 'function') {
      this._validators.push(validator);
    }
  }

  createThumbnail(video: HTMLVideoElement, name: string = 'thumbnail.png'): Promise<File> {
    return new Promise((resolve, reject) => {
      const context = this._canvas.getContext('2d');
      this._canvas.height = video.videoHeight;
      this._canvas.width = video.videoWidth;
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      this._canvas.toBlob((blob) => {
        const file = new File([blob], name, { type: 'image/png' });
        resolve(file);
      });
    });
  }
}


export class FileData {
  uploaded = false;
  url: string = null;
  type: string = null;
  id = `${btoa(Date.now().toString())}.${Date.now()}`;
  thumbnail: File;
  private _readComplete: Subject<void> = new Subject();
  readonly onload: Observable<void> = this._readComplete.asObservable();
  private _imageElement: HTMLImageElement = document.createElement('img');
  private _canvasElement: HTMLCanvasElement = document.createElement('canvas');
  constructor(public file: File, url: string = null) {
    // create thumnail
    if (!url) {
      this.type = file.type;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
        this._readComplete.next();
        this._readComplete.complete();
        this.createImageThumnail(this.url, 50, 50);
      };
      reader.readAsDataURL(file);
    } else {
      // this.type
      const ext = url.substr(url.lastIndexOf('.') + 1);
      if (['jpg', 'jpeg', 'png'].indexOf(ext) !== -1) {
        this.type = `image/${ext}`;
      }
      if (['mp4', '3gp', 'flv'].indexOf(ext) !== -1) {
        this.type = `video/${ext}`;
      }
      this.url = url;
      this.uploaded = true;
    }
  }
  createImageThumnail(url: string, height: number, width: number): Promise<File> {
    return new Promise((resolve, reject) => {
      const context = this._canvasElement.getContext('2d');
      this._canvasElement.height = height;
      this._canvasElement.width = width;
      this._imageElement.src = url;
      context.drawImage(this._imageElement, 0, 0, height, width);
      this._canvasElement.toBlob((blob) => {
        const file = new File([blob], name, { type: 'image/png' });
        this.thumbnail = file;
      });
    });
  }
}
