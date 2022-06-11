import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyDropdownComponent } from './emergency-dropdown.component';

describe('EmergencyDropdownComponent', () => {
  let component: EmergencyDropdownComponent;
  let fixture: ComponentFixture<EmergencyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
