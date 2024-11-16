import { Component } from '@angular/core';
import { TAGS } from '../../../../../../utils/data/events';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent {
  event_type: 'physical' | 'virtual' = 'virtual';
  step: number = 1;
  tags = TAGS;
  subtitle: { [key: number]: string } = {
    1: 'What kind of event would you like to create?',
    2: 'Event Information - Enter the correct details',
    3: 'Event Tags - Choose event tags for easy discovery and timeline visibility.',
    4: 'Ticket Information - Enter the correct details',
  };
  getStroke(event: typeof this.event_type): string {
    if (event === this.event_type) {
      return '#962B2B';
    } else {
      return '#3B3B3B';
    }
  }
  onChangeEvent(event: typeof this.event_type) {
    this.event_type = event;
  }
  goNext() {
    this.step++;
  }
  goPrev() {
    this.step--;
  }
  submitForm() {}
}
