import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-place-listing',
  templateUrl: './place-listing.component.html',
  styleUrls: ['./place-listing.component.css']
})
export class PlaceListingComponent implements OnInit {

  public locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.GetAllLocations().subscribe((result) => {
      this.locations = result;
    });
    
  }


}
