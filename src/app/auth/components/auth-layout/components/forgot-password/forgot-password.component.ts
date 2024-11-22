import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { HandlerService } from '../../../../../shared/services/handler/handler.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnInit {
  loading = false;
  changePasswordForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private handler: HandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.changePasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  async onSubmit() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    const payload = {
      email: this.changePasswordForm.value.email!,
    };
    this.loading = true;
    this.authService.forgotPassword(payload).subscribe({
      next: (response) => {
        this.handler.successHandler(response);
        this.loading = false;
        this.router.navigate(['/auth/password/change'], {
          queryParams: {
            email: payload.email,
          },
        });
      },
      error: (error) => {
        this.handler.errorHandler(error);
        this.loading = false;
      },
    });
  }
}
