import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { REGEX } from '../../../../../app.constants';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { HandlerService } from '../../../../../shared/services/handler/handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private handler: HandlerService,
    private router: Router
  ) {}
  loading = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.PASSWORD),
      Validators.minLength(8),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) return;

    const payload = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };
    this.authService.login(payload).subscribe({
      next: (response) => {
        this.handler.successHandler(response);
        this.authService.handleLogin(response);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.handler.errorHandler(err);
      },
    });
  }
}
