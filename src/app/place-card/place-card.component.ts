import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../models/location';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  @Input() location: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
