import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationInputComponent } from './filter/filter-location/location-input/location-input.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LoaderComponent } from './loader/loader.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { CardsListComponent } from './card/cards-list/cards-list.component';
import { CardDetailsComponent } from './card/card-details/card-details.component';
import { CardBtnsComponent } from './card/card-btns/card-btns.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';
import { FilterLocationComponent } from './filter/filter-location/filter-location.component';
import { FilterBtnsComponent } from './filter/filter-btns/filter-btns.component';

@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent,
    FooterComponent,
    LocationInputComponent,
    LoaderComponent,
    PageTitleComponent,
    CardsListComponent,
    CardDetailsComponent,
    CardBtnsComponent,
    CardHeaderComponent,
    SearchBarComponent,
    FilterComponent,
    FilterLocationComponent,
    FilterBtnsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, GooglePlaceModule],
  exports: [
    FormComponent,
    HeaderComponent,
    FooterComponent,
    LocationInputComponent,
    LoaderComponent,
    PageTitleComponent,
    CardsListComponent,
    CardDetailsComponent,
    CardBtnsComponent,
    CardHeaderComponent,
    SearchBarComponent,
    FilterComponent,
    FilterLocationComponent,
    FilterBtnsComponent
  ],
})
export class SharedModule {}
