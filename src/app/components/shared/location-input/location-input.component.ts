import { Component,  Input,  ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css'],
})
export class LocationInputComponent {
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;

  userAddress: string = '';
  userLatitude: string = '';
  userLongitude: string = '';

  handleAddressChange(address: any) {
    console.log("change");
    this.userAddress = address.formatted_address;
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
  }
}
