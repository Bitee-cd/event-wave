import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthedLayoutComponent } from './components/authed-layout/authed-layout.component';
import { SharedModule } from '../shared/shared.module';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: AuthedLayoutComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthLayoutComponent,
    DashboardComponent,
    AuthedLayoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(authRoutes), SharedModule],
})
export class AuthModule {}
