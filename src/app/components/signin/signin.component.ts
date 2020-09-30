import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../shared/services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    userSigninDetails: FormGroup;

    constructor(private fb: FormBuilder,
                private authService: AuthService) { }

    ngOnInit() {
        this.userSigninDetails = this.fb.group({
            'userEmail': ['', [ Validators.required, Validators.email ]],
            'userPassword': ['', [ Validators.required, Validators.minLength(8) ]]
        });
    }

    get userEmail() {
        return this.userSigninDetails.get('userEmail');
    }

    get userPassword() {
        return this.userSigninDetails.get('userPassword');
    }

    handleSubmit() {
        const userData = {
            userEmail: this.userEmail.value,
            userPassword: this.userPassword.value
        }
        this.authService.loginUserWithEmailAndPassword(userData)
            .then(res => console.log(res));
    }

}
