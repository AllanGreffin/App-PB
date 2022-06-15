import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceListingComponent } from './place-listing/place-listing.component';
import { EmergencyListingComponent } from './emergency-listing/emergency-listing.component';
import { EmergencyDropdownComponent } from './emergency-dropdown/emergency-dropdown.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { LocationService } from './services/location.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    PlaceCardComponent,
    PlaceListingComponent,
    EmergencyListingComponent,
    EmergencyDropdownComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
