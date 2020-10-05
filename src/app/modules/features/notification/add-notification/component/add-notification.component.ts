import { Component, OnInit, ViewChild } from '@angular/core';
import { UserListingComponent } from '../../../user/user-listing/component/user-listing.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddNotificationService } from '../service/add-notification.service';
import { InputFilesComponent } from '../../../../layout/layout-shared/input-files/component/input-files.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NOTIFICATION_LIST } from '../../../../../constant/absolute-routes/absolute-routes';
import {PATTERN} from "../../../../../constant/pattern/patterns";
import {VALIDATION_CRITERIA} from "../../../../../constant/validation-criteria/validation-criteria";


@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
  providers: []
})
export class AddNotificationComponent implements OnInit {

  addNotificationForm: FormGroup;
  @ViewChild(UserListingComponent, { static: true }) userListingComponent: UserListingComponent;
  @ViewChild(InputFilesComponent, { static: true }) inputFilesComponent: InputFilesComponent;
  notificationId = '';
  notificationDetail: any;
  constructor(
    private _addNotificationService: AddNotificationService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.createForm();
    this.notificationId = this._route.snapshot.params.notificationId;
  }

  ngOnInit() {
    if (this.notificationId) {
      this.getNotificationDetail();
    }
  }
  createForm() {
    this.addNotificationForm = this._formBuilder.group({
      title: ['', Validators.compose([Validators.pattern(PATTERN.name),
        Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
        Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength)])],
      body: ['', Validators.compose([Validators.pattern(PATTERN.name),
        Validators.minLength(VALIDATION_CRITERIA.locationMinLength),
        Validators.maxLength(VALIDATION_CRITERIA.locationMaxLength)])],
      flag: [''],
      scheduleOn: ['']
    });
  }
  get flag() {
    return this.addNotificationForm.controls.flag.value;
  }

  getNotificationDetail() {
    const data = {
      notificationId: this.notificationId,
      page: 1, limit: 10
    }
    this._addNotificationService.getNotificationDetail(data).subscribe(
      (response: any) => {
        if (response.data) {
          console.log(response);
          this.notificationDetail = response.data;
          this.patchValueInForm();
          if (this.notificationDetail.media) {
            this.inputFilesComponent.urls = [this.notificationDetail.media.original]
          }
        }
      }, err => { }
    )
  }
  patchValueInForm() {
    const data = {
      title: this.notificationDetail.title,
      body: this.notificationDetail.body,
      flag: false,
      scheduleOn: this.notificationDetail.scheduleOn,
    }
    this.addNotificationForm.patchValue(data);
  }
  changeValidationOnScheduleDate() {
    if (this.flag) {
      this.addNotificationForm.controls['scheduleOn'].setValidators([Validators.required])
    }
    this.addNotificationForm.controls['scheduleOn'].updateValueAndValidity()
  }

  submitForm() {
    if (this.addNotificationForm.invalid || this.addNotificationForm.disabled) {
      return;
    }
    let files = [];
    let body = { ...this.addNotificationForm.value, userList: this.userListingComponent.selection.selected.map(item => item._id) };
    this.addNotificationForm.disable();
    this.inputFilesComponent._store.filter(x => x.url.startsWith('data:')).forEach(
      x => {
        files.push(x.file, x.thumbnail);
      }
    )
    if (files.length === 2) {
      this._addNotificationService.uploadFiles(files).then(
        data => {
          body['media'] = {
            original: data[0].Location, thumbnail: data[1].Location
          };
          this.addNotification(body);
        }
      )
    } else if (this.notificationDetail && this.notificationDetail.media) {
      body['media'] = this.notificationDetail.media;
      this.addNotification(body);
    } else {
      this.addNotification(body);
    }
  }
  
  addNotification(data) {
    if (!data.flag) {
      data.scheduleOn = new Date(data.scheduleOn).getTime();
    } else {
      delete data.scheduleOn;
    }
    delete data['flag'];
    if (this.notificationId) {
      data['notificationId'] = this.notificationId;
    }
    this._addNotificationService.addNotification(data).subscribe(
      data => {
        if (this.notificationId) {
          this._addNotificationService.showAlert('UPDATED');
        } else {
          this._addNotificationService.showAlert('ADDED');
        }
        this._router.navigate([NOTIFICATION_LIST]);
      }, err => {
        this.addNotificationForm.enable();
      }
    )
  }
}
