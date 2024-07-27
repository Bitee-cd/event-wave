import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthedNavbarComponent } from './authed-navbar.component';

describe('AuthedNavbarComponent', () => {
  let component: AuthedNavbarComponent;
  let fixture: ComponentFixture<AuthedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthedNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
