import { Component } from '@angular/core';
import { FOOTER_DATA } from '../../../utils/data/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerItems = FOOTER_DATA;
}
