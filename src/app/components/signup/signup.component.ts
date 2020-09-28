import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
            'userEmail': ['', [Validators.required, Validators.email]],
            'userFullName': ['', [Validators.required]],
            'userAccountName': ['', [Validators.required]],
            'userPassword': ['', [Validators.required]]
        });
        console.log(this.userSignupDetails);
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
