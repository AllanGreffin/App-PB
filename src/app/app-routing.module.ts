import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyListingComponent } from './emergency-listing/emergency-listing.component';
import { MainWindowComponent } from './main-window/main-window.component';

const routes: Routes = [
  { path: "", component: MainWindowComponent },
  { path: "emergencies", component: EmergencyListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
