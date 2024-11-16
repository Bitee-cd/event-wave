import { Component, inject } from '@angular/core';
import { EVENTS_DATA } from '../../../../../utils/data/events';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-other-events',
  templateUrl: './other-events.component.html',
  styleUrl: './other-events.component.css',
})
export class OtherEventsComponent {
  events = EVENTS_DATA;
  filterModal = inject(MatDialog);
  filterOptions = {
    location: '',
    date: '',
    event_type: '',
    event_pricing: '',
  };
  openFilter() {
    console.log('button clicked');
    this.filterModal.open(FilterComponent, {
      minWidth: '50vw',
    });
  }
}
