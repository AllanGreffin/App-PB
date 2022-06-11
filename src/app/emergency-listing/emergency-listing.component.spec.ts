import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyListingComponent } from './emergency-listing.component';

describe('EmergencyListingComponent', () => {
  let component: EmergencyListingComponent;
  let fixture: ComponentFixture<EmergencyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
