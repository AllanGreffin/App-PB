import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { EmergencyLocation } from '../models/emergency-location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-emergency-listing',
  templateUrl: './emergency-listing.component.html',
  styleUrls: ['./emergency-listing.component.css']
})
export class EmergencyListingComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  public emergencyLocations: EmergencyLocation[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.GetAllEmergencyLocations().subscribe(result => {
      this.emergencyLocations = result;
    })
  }

}
