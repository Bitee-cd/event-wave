import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGEX } from '../../../../../app.constants';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { HandlerService } from '../../../../../shared/services/handler/handler.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent implements OnInit {
  loading = false;
  email!: string | null;
  changePasswordForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private handler: HandlerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initializeForm();
    this.email = this.route.snapshot.queryParamMap.get('email');
  }
  initializeForm() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(REGEX.PASSWORD),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      otp: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        Validators.pattern(/^[0-9]+$/),
      ]),
    });
  }
  onSubmit() {
    if (this.changePasswordForm.invalid) return;

    const payload = {
      email: this.email!,
      otp: this.changePasswordForm.value.otp,
      password: this.changePasswordForm.value.password,
    };
    this.loading = true;
    this.authService.changePassword(payload).subscribe({
      next: (response) => {
        this.handler.successHandler(response);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.handler.errorHandler(error);
        this.loading = false;
      },
    });
  }
}
