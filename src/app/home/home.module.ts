import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DiscoverComponent } from './discover/discover.component';
import { HeroComponent } from './hero/hero.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SharedModule } from '../shared/shared.module';
const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    DiscoverComponent,
    HeroComponent,
    NewsletterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), SharedModule],
})
export class HomeModule {}
