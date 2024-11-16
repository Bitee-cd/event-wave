import { Component, inject } from '@angular/core';
import { EVENTS_DATA } from '../../../../../utils/data/events';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventComponent } from './create-event/create-event.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  events = EVENTS_DATA;
  createEventModal = inject(MatDialog);

  createEvent() {
    this.createEventModal.open(CreateEventComponent, {
      minWidth: '50vw',
      height: '600px',
    });
  }
}
