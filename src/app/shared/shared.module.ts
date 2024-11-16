import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { RouterLink } from '@angular/router';
import { AuthedNavbarComponent } from './components/authed-navbar/authed-navbar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventDateFormatterPipe } from './pipes/event-date-formatter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent,
    FooterComponent,
    AuthedNavbarComponent,
    EventCardComponent,
    EventDateFormatterPipe,
  ],
  imports: [
    MaterialUiModule,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    MaterialUiModule,
    NavbarComponent,
    LogoComponent,
    FooterComponent,
    AuthedNavbarComponent,
    EventCardComponent,
    EventDateFormatterPipe,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
