import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HandlerService } from '../../../../../shared/services/handler/handler.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent implements OnInit {
  email: string | null = null;
  submittingOtp = false;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private handler: HandlerService,
    private router: Router
  ) {}

  verifyOtpForm = new FormGroup({
    otp: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern(/^[0-9]+$/),
    ]),
  });
  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email');
  }

  truncateEmail(email: string): string {
    if (!email || typeof email !== 'string') return '';
    const [local_name, domain_name] = email.split('@');
    const hidden =
      local_name.slice(0, 2) +
      '*'.repeat(local_name.length - 4) +
      local_name.slice(-2) +
      '@' +
      domain_name;
    return hidden;
  }
  submitOtp() {
    if (this.verifyOtpForm.invalid) {
      return;
    }

    const payload = {
      otp: this.verifyOtpForm.value?.otp!,
      email: this.email!,
    };
    this.submittingOtp = true;
    this.authService.verifyOtp(payload).subscribe({
      next: (response) => {
        this.submittingOtp = false;
        this.handler.successHandler(response);
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.submittingOtp = false;
        this.handler.errorHandler(err);
      },
    });
  }
  resendOtp() {
    if (!this.email) {
      return;
    }
    this.authService.regenerateOtp({ email: this.email }).subscribe({
      next: (response) => {
        this.handler.successHandler(response);
      },
      error: (err) => {
        this.handler.errorHandler(err);
      },
    });
  }
}
