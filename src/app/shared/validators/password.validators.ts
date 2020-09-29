import { AbstractControl, ValidationErrors } from '@angular/forms';

// Numbers
// No Number - 0
// One Number - 15
// More than one Number - 20

// Lowercase And Uppercase
// No - 0
// only lowercase - 10
// only uppercase - 20
// Both uppercase and lowercase - 40

// Symbols
// No - 0
// One symbol - 15
// More than one symbol - 20

// Minimum Length
// Less than 8 - 0
// Equal to 8 - 15
// More than 8 - 20

export class PasswordValidators {

    passwordHasNumbers(val: string): number {
        const count = (val.match(/\d/g) || []).length;
        if(count === 0) return 0;
        else if(count === 1) return 15;
        else if(count > 1) return 20; 
    }

    passwordHasLowerAndUpperCase(val: string): number {
        const lowercaseCount = (val.match(/[a-z]/g) || []).length;
        const uppercaseCount = (val.match(/[A-Z]/g) || []).length;
        if(lowercaseCount === 0 && uppercaseCount === 0) return 0;
        else if(lowercaseCount > 0 && uppercaseCount === 0) return 10;
        else if(lowercaseCount === 0 && uppercaseCount > 0) return 20;
        else if(lowercaseCount > 0 && uppercaseCount > 0) return 40;
    }

    passwordHasSymbols(val: string): number {
        const count = (val.match(/[.!@#$]/g) || []).length;
        if(count === 0) return 0;
        else if(count === 1) return 15;
        else if(count > 1) return 20;
    }

    passwordHasMinimumLength(val: string): number {
        const length = val.length;
        if(length < 8) return 0;
        else if(length === 8) return 15;
        else if(length > 8) return 20;
    }

    static passwordStrength(control: AbstractControl): ValidationErrors | null {
        let pwdStrength: number = 0;
        const passwordValidators = new PasswordValidators();
        pwdStrength = pwdStrength + passwordValidators.passwordHasNumbers(control.value);
        pwdStrength = pwdStrength + passwordValidators.passwordHasLowerAndUpperCase(control.value);
        pwdStrength = pwdStrength + passwordValidators.passwordHasSymbols(control.value);
        pwdStrength = pwdStrength + passwordValidators.passwordHasMinimumLength(control.value);
        if(pwdStrength < 80) return { passwordStrength: pwdStrength };
        else return null;
    }


}