import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {PATTERN} from '../../../../constant/pattern/patterns';
import {VALIDATION_CRITERIA} from '../../../../constant/validation-criteria/validation-criteria';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    hide = true;
    loginForm: FormGroup;

    constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.formBuilder.group(
            {
                email: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.email),
                    Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)])],
                password: ['', Validators.compose([Validators.required, Validators.pattern(PATTERN.password),
                    Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
                    Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)])]
            }
        );
    }

    getControl(control) {
        return this.loginForm.controls[control];
    }

    /*
         Method For Calling Login API
    */
    login() {
        if (this.loginForm.invalid) {
            return;
        }
        const data = {...this.loginForm.value};
        this.loginForm.disable();
        this.loginService.login(data).subscribe(
            response => {
            },
            err => {
                this.loginForm.enable();
            }
        );
    }
}
