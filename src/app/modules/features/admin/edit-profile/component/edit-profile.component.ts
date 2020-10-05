import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from '../../../../shared/services/file-upload.service';
import { EditProfileService } from '../service/edit-profile.service';
import { onSelectFile } from '../../../../../constant/file-input/file-input';
import { invalidImageError, invalidFileSize } from '../../../../../constant/messages/messages';
import {PATTERN} from '../../../../../constant/pattern/patterns';
import {VALIDATION_CRITERIA} from '../../../../../constant/validation-criteria/validation-criteria';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit {
  profilePicURL: string;
  editProfileForm: FormGroup;
  minDateOfBirth = new Date();
  editProfileSubscription: Subscription;
  imageFile;
  profileDetail: any;
  constructor(
    private _editProfileService: EditProfileService,
    private _fileUploadService: FileUploadService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getProfileDetail();
  }

  createForm() {
    this.editProfileForm = this._formBuilder.group(
        {
          name: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.name),
            Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
            Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength)])],
          email: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.email),
            Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)])],
        }
    )
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    this._editProfileService.getProfileDetail()
      .subscribe(
        (response: any) => {
          console.log(response)
          this.profileDetail = response.data;
          this.editProfileForm.patchValue({
            name: this.profileDetail.name,
            email: this.profileDetail.email
          })
          this.profilePicURL = this.profileDetail.image;
        }
      )
  }

  /**
   * @description Getting controls of editProfileForm
   * @param name 
   */
  getControl(name) {
    return this.editProfileForm.controls[name];
  }

  /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */
  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this._editProfileService.showAlert(invalidImageError());
      } else if (err.size) {
        this._editProfileService.showAlert(invalidFileSize())
      }
    }
  }

  /**
   * @description First upload the profile picture then edit the profile
   */
  async editProfile() {
    if (this.editProfileForm.invalid)
      return;
    if (this.imageFile) {
      let data: any = await this._fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { image: this.profilePicURL, ...this.editProfileForm.value };
    this.editProfileForm.disable();
    this.editProfileSubscription = this._editProfileService.editProfile(body).subscribe(
      data => {
      },
      err => {
        this.editProfileForm.enable();
      }
    );
  }

  ngOnDestroy() {
    if (this.editProfileSubscription)
      this.editProfileSubscription.unsubscribe();
  }
}
