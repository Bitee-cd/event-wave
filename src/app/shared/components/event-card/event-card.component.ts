import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() eventData: { date: Date | string; event_name: string } = {
    date: '',
    event_name: '',
  };
}
