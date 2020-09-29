import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './../../shared/validators/password.validators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    userSignupDetails: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.userSignupDetails = this.fb.group({
            'userEmail': ['', [ Validators.required, Validators.email ]],
            'userFullName': ['', [ Validators.required, Validators.minLength(3) ]],
            'userAccountName': ['', [ Validators.required ]],
            'userPassword': ['', [ Validators.required, PasswordValidators.passwordStrength ]]
        });
    }

    get userEmail() {
        return this.userSignupDetails.get('userEmail');
    }

    get userFullName() {
        return this.userSignupDetails.get('userFullName');
    }

    get userAccountName() {
        return this.userSignupDetails.get('userAccountName');
    }

    get userPassword() {
        return this.userSignupDetails.get('userPassword');
    }

}
