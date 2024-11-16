import { Component, inject } from '@angular/core';
import { TAGS, EVENTS_DATA } from '../../../../../utils/data/events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-event',
  templateUrl: './individual-event.component.html',
  styleUrl: './individual-event.component.css',
})
export class IndividualEventComponent {
  eventId!: string;
  tags = TAGS.splice(0, 7);
  events = EVENTS_DATA.splice(0, 3);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventId = id;
    }
  }
}
