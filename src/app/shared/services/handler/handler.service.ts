import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HandlerService {
  constructor(private toastr: ToastrService) {}

  successHandler(message: {
    errors: string | null;
    responseMessage: string | null;
  }) {
    this.toastr.success(message?.responseMessage ?? 'success', 'Success');
  }
  errorHandler(err: HttpErrorResponse) {
    const error = this.extractErrorMessage(err);
    this.toastr.error(error, 'Error');
  }

  private extractErrorMessage(err: HttpErrorResponse): string {
    if (err?.error?.errors && err?.error?.errors?.length) {
      return err?.error?.errors && err?.error?.errors[0];
    } else return err.error?.responseMessage;
  }
}
