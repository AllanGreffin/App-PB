import { Component, Input, OnInit } from '@angular/core';
import { faBagShopping, faBeer, faCalendar, faCapsules, faCodeFork, faHotel, faPlane, faSubway, faTree, faUtensils, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Location } from '../models/location';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  tree = faTree;
  hotel = faHotel;
  restaurant = faUtensils;
  event = faCalendar;
  pub = faBeer;
  subway = faSubway;
  mall = faBagShopping;
  drugstore = faCapsules;
  airport = faPlane;

  icon: IconDefinition;

  @Input() location: Location;

  constructor() { }

  ngOnInit(): void {
    switch(this.location.tipo){
      case "Park":
        this.icon = this.tree
      break;
      case "Hotel":
        this.icon = this.hotel
      break;
      case "Restaurant":
        this.icon = this.restaurant;
      break;
      case "Event":
        this.icon = this.event
      break;
      case "Airport":
        this.icon = this.airport
      break;
      case "Pub":
        this.icon = this.pub
      break;
      case "Subway":
        this.icon = this.subway
      break;
      case "Mall":
        this.icon = this.mall
      break;
      case "Drugstore":
        this.icon = this.drugstore
      break;
    }
  }

}
