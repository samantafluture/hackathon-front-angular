import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonFormComponent } from './hackathon-form/hackathon-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationInputComponent } from './location-input/location-input.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LoaderComponent } from './loader/loader.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    HackathonFormComponent,
    HeaderComponent,
    FooterComponent,
    LocationInputComponent,
    LoaderComponent,
    PageTitleComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, GooglePlaceModule],
  exports: [
    HackathonFormComponent,
    HeaderComponent,
    FooterComponent,
    LocationInputComponent,
    LoaderComponent,
    PageTitleComponent
  ],
})
export class SharedModule {}
