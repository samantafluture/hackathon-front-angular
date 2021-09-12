import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonFormComponent } from './hackathon-form/hackathon-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HackathonFormComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    GoogleMapsComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    HackathonFormComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    GoogleMapsComponent
  ],
})
export class SharedModule {}
