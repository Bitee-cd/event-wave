import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HandlerService } from '../../../../../shared/services/handler/handler.service';
import { REGEX } from '../../../../../app.constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private handler: HandlerService
  ) {}
  loading = false;
  signUpForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(REGEX.PASSWORD),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    },
    { validators: this.matchValidator('password', 'confirmPassword') }
  );

  ngOnInit(): void {}
  onSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }
    const formValue = this.signUpForm.value;
    this.loading = true;
    const payload = {
      email: formValue.email!,
      password: formValue.password!,
      firstName: formValue.firstName!,
      phoneNumber: formValue.phoneNumber!,
      lastName: formValue.lastName!,
    };
    this.authservice.signup(payload).subscribe({
      next: (response) => {
        this.handler.successHandler(response);
        this.loading = false;
        this.router.navigate(['/auth/verify-otp'], {
          queryParams: {
            email: payload.email,
          },
        });
      },
      error: (err) => {
        this.loading = false;
        this.handler.errorHandler(err);
      },
    });
  }

  matchValidator(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (
        matchingControl!.errors &&
        !matchingControl!.errors?.['confirmedValidator']
      ) {
        return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
    };
  }
}
