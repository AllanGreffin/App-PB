import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { EmergencyLocation } from '../models/emergency-location';

@Component({
  selector: 'app-emergency-dropdown',
  templateUrl: './emergency-dropdown.component.html',
  styleUrls: ['./emergency-dropdown.component.css']
})
export class EmergencyDropdownComponent implements OnInit {

  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;

  isClosed: boolean = true;

  @Input() emergencyLocation: EmergencyLocation;

  constructor() { }

  ngOnInit(): void {
  }

  public openClose(){
    this.isClosed = !this.isClosed;
  }

  public call(event: MouseEvent){
    event.stopPropagation();
  }
}
