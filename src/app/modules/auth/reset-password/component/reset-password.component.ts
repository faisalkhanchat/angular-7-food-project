import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResetPasswordService} from '../service/reset-password.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PATTERN} from '../../../../constant/pattern/patterns';
import {VALIDATION_CRITERIA} from '../../../../constant/validation-criteria/validation-criteria';
import {FormService} from '../../../shared/services/form.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['../../login/component/login.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    passwordHide = true;
    logo = 'assets/images/dummy-logo.png';
    confirmPasswordHide = true;
    token: String;
    resetForm: FormGroup;

    constructor(
        private _accountService: ResetPasswordService,
        private _route: ActivatedRoute, private formBuilder: FormBuilder,
        private _formService: FormService
    ) {
        this.token = this._route.snapshot.params.token;
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.resetForm = this.formBuilder.group(
            {
                password: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.password),
                    Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
                    Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)])],
                confirmPassword: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.password),
                    Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
                    Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)])]
            },
            {
                validator: this._formService.matchPassword
            }
        );
    }

    getControl(control) {
        return this.resetForm.controls[control];
    }

    resetPassword() {
        if (this.resetForm.invalid || this.resetForm.disabled) {
            return;
        }
        let data = {...this.resetForm.value};
        this.resetForm.disable();
        data['resetPassword'] = data['password'];
        data['token'] = this.token;
        delete data['password'];
        this._accountService.resetPassword(data)
            .subscribe(
                response => {
                },
                err => {
                    this.resetForm.enable();
                }
            );
    }

}
