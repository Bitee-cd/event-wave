import { Component } from '@angular/core';
import { EVENTS_DATA } from '../../../utils/data/events';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  events = EVENTS_DATA;
}
