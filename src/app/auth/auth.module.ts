import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth-layout/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth-layout/components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/authed-layout/components/dashboard/dashboard.component';
import { AuthedLayoutComponent } from './components/authed-layout/authed-layout.component';
import { SharedModule } from '../shared/shared.module';
import { OtherEventsComponent } from './components/authed-layout/components/other-events/other-events.component';
import { FilterComponent } from './components/authed-layout/components/other-events/filter/filter.component';
import { CreateEventComponent } from './components/authed-layout/components/dashboard/create-event/create-event.component';
import { IndividualEventComponent } from './components/authed-layout/components/individual-event/individual-event.component';
import { RegisterEventComponent } from './components/authed-layout/components/register-event/register-event.component';
import { AccountSettingsLayoutComponent } from './components/authed-layout/components/account-settings-layout/account-settings-layout.component';
import { ProfileInformationComponent } from './components/authed-layout/components/account-settings-layout/components/profile-information/profile-information.component';
import { AccountSecurityComponent } from './components/authed-layout/components/account-settings-layout/components/account-security/account-security.component';
import { EmailPreferencesComponent } from './components/authed-layout/components/account-settings-layout/components/email-preferences/email-preferences.component';
import { LinkedAccountsComponent } from './components/authed-layout/components/account-settings-layout/components/linked-accounts/linked-accounts.component';
import { PrivacySettingsComponent } from './components/authed-layout/components/account-settings-layout/components/privacy-settings/privacy-settings.component';
import { VerifyOtpComponent } from './components/auth-layout/components/verify-otp/verify-otp.component';
import { ForgotPasswordComponent } from './components/auth-layout/components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/auth-layout/components/change-password/change-password.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'verify-otp', component: VerifyOtpComponent },
      { path: 'password/forget', component: ForgotPasswordComponent },
      { path: 'password/change', component: ChangePasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: AuthedLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'other-events', component: OtherEventsComponent },
      { path: 'event/:id', component: IndividualEventComponent },
      { path: 'register/:id', component: RegisterEventComponent },
      {
        path: 'settings',
        component: AccountSettingsLayoutComponent,
        children: [
          { path: '', redirectTo: 'profile-information', pathMatch: 'full' },
          {
            path: 'profile-information',
            component: ProfileInformationComponent,
          },
          { path: 'account-security', component: AccountSecurityComponent },
          { path: 'email-preferences', component: EmailPreferencesComponent },
          { path: 'linked-accounts', component: LinkedAccountsComponent },
          { path: 'privacy-settings', component: PrivacySettingsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthLayoutComponent,
    DashboardComponent,
    AuthedLayoutComponent,
    OtherEventsComponent,
    FilterComponent,
    CreateEventComponent,
    IndividualEventComponent,
    RegisterEventComponent,
    AccountSettingsLayoutComponent,
    ProfileInformationComponent,
    AccountSecurityComponent,
    EmailPreferencesComponent,
    LinkedAccountsComponent,
    PrivacySettingsComponent,
    VerifyOtpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(authRoutes), SharedModule],
})
export class AuthModule {}
