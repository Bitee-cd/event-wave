import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'eventDateFormatter',
})
export class EventDateFormatterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string | Date | number): SafeHtml {
    const date = new Date(value);
    const month = new DatePipe('en-US').transform(date, 'MMM');
    const day = new DatePipe('en-US').transform(date, 'dd');
    const formattedDate = `
      <p class="p-2 text-primary bg-primary/15 flex items-center justify-center gap-2 flex-col rounded-sm">
        <span class="text-base font-bold">${month}</span>
        <span class="text-2xl font-semibold">${day}</span>
      </p>
    `;
    return this.sanitizer.bypassSecurityTrustHtml(formattedDate);
  }
}
