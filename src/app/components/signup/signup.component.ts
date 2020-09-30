import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidators } from './../../shared/validators/password.validators';
import { AuthService } from './../../shared/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    userSignupDetails: FormGroup;

    constructor(private fb: FormBuilder,
                private authService: AuthService) { }

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

    setData() {
        this.authService.setUserData({
            userEmail: 'akhilmallidi.98@gmail.com',
            userFullName: 'Akhil',
            userAccountName: 'Akhil Reddy Mallidi'
        })  
    }

    handleSubmit() {
        this.authService.createUserWithEmailAndPassword(
            {
                userEmail: this.userEmail.value,
                userPassword: this.userPassword.value
            }
        ).then(res => {
            this.authService.setUserData({
                userEmail: res.user.email,
                userFullName: this.userFullName.value,
                userAccountName: this.userAccountName.value,
                userId: res.user.uid
            })
        });
    }

}
