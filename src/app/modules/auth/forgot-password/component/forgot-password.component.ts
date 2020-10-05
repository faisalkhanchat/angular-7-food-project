import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForgotPasswordService} from '../service/forgot-password.service';
import {POPUP_MESSAGES} from '../../../../constant/messages/messages';
import {PATTERN} from '../../../../constant/pattern/patterns';
import {VALIDATION_CRITERIA} from '../../../../constant/validation-criteria/validation-criteria';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../login/component/login.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    forgotForm: FormGroup;
    logo = 'assets/images/dummy-logo.png';
    showSpinner = false;
    title = POPUP_MESSAGES.forgotPasswordTitle;

    constructor(private forgotPasswordService: ForgotPasswordService,
                private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.forgotForm = this.formBuilder.group({
                email: ['', Validators.compose([Validators.pattern(PATTERN.email),
                    Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)])]
            }
        );
    }

    getControl(control) {
        return this.forgotForm.controls[control];
    }

    /*
         Method For Calling Validating Email
    */
    validateEmail() {
        if (this.forgotForm.invalid || this.forgotForm.disabled) {
            return;
        }
        const data = {...this.forgotForm.value};
        this.forgotForm.disable();
        this.forgotPasswordService.validateEmail(data)
            .subscribe(
                response => {
                },
                err => {
                    this.forgotForm.enable();
                }
            );
    }
}
