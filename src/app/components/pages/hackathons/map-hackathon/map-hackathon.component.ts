import { Component, OnInit } from '@angular/core';

import { MapService } from 'src/app/services/map.service';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-map-hackathon',
  templateUrl: './map-hackathon.component.html',
  styleUrls: ['./map-hackathon.component.css'],
})
export class MapHackathonComponent implements OnInit {
  center!: google.maps.LatLng;

  // MapOptions object specification
  zoom!: number;
  disableDefaultUI!: boolean;
  disableDoubleClickZoom!: boolean;
  mapTypeId!: google.maps.MapTypeId;
  maxZoom!: number;
  minZoom!: number;
  styles!: google.maps.MapTypeStyle[];

  // Marker specification
  position!: google.maps.LatLng;
  title!: string;

  // Info window
  content!: string;

  // Address to be searched.
  address!: string;

  // Warning flag & message.
  warning!: boolean;
  message!: string;

  constructor(
    private map: MapService,
    private geocoding: GeocodingService
  ) {
    this.center = new google.maps.LatLng(41.910943, 12.476358);
    this.zoom = 4;

    // Other options.
    this.disableDefaultUI = true;
    this.disableDoubleClickZoom = false;
    this.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.maxZoom = 15;
    this.minZoom = 4;
    // Styled Maps: https://developers.google.com/maps/documentation/javascript/styling
    this.styles = [
      {
        featureType: 'landscape',
        stylers: [{ color: '#ffffff' }],
      },
    ];

    // Initially the marker isn't set.

    this.address = '';

    this.warning = false;
    this.message = '';
  }

  ngOnInit(): void {
    // Autocomplete: it needs 'places' library.
    /* const el: HTMLInputElement = this.elementRef.nativeElement.querySelector('#input-search');
    const autocomplete: google.maps.places.Autocomplete = new google.maps.places.Autocomplete(el, {
        types: ["address"]
    });
    autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
                return;
            }
            // New center object: triggers OnChanges.
            this.center = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
            this.zoom = 11;

            this.setMarker(this.center, "search result", place.formatted_address);
        });
    }); */
  }

  /*
  getCurrentPosition(): void {
    this.warning = false;
    this.message = '';

    if (navigator.geolocation) {
      this.geolocation.getCurrentPosition().subscribe(
        (position: Position) => {
          if (
            this.center.lat() != position.coords.latitude &&
            this.center.lng() != position.coords.longitude
          ) {
            // New center object: triggers OnChanges.
            this.center = new google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            this.zoom = 11;

            // Translates the location into address.
            this.geocoding
              .geocode(this.center)
              .forEach((results: google.maps.GeocoderResult[]) => {
                this.setMarker(
                  this.center,
                  'your locality',
                  results[0].formatted_address
                );
              })
              .then(() => console.log('Geocoding service: completed.'))
              .catch((error: google.maps.GeocoderStatus) => {
                if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
                  this.message = 'zero results';
                  this.warning = true;
                }
              });
          }
        },
        (error: PositionError) => {
          if (error.code > 0) {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                this.message = 'permission denied';
                break;
              case error.POSITION_UNAVAILABLE:
                this.message = 'position unavailable';
                break;
              case error.TIMEOUT:
                this.message = 'position timeout';
                break;
            }
            this.warning = true;
          }
        },
        () => console.log('Geolocation service: completed.')
      );
    } else {
      this.message = "browser doesn't support geolocation";
      this.warning = true;
    }
  }
*/

  search(address: string): void {
    if (address != '') {
      this.warning = false;
      this.message = '';
      // Converts the address into geographic coordinates.
      // Here 'forEach' resolves the promise faster than 'subscribe'.
      this.geocoding
        .codeAddress(address)
        .forEach((results: google.maps.GeocoderResult[]) => {
          if (!this.center.equals(results[0].geometry.location)) {
            // New center object: triggers OnChanges.
            this.center = new google.maps.LatLng(
              results[0].geometry.location.lat(),
              results[0].geometry.location.lng()
            );
            this.zoom = 11;

            this.setMarker(
              this.center,
              'search result',
              results[0].formatted_address
            );
          }
        })
        .then(() => {
          this.address = '';
          console.log('Geocoding service: completed.');
        })
        .catch((error: google.maps.GeocoderStatus) => {
          if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
            this.message = 'zero results';
            this.warning = true;
          }
        });
    }
  }

  // Sets the marker & the info window.
  setMarker(latLng: google.maps.LatLng, title: string, content: string): void {
    this.map.deleteMarkers();
    // Sets the marker.
    this.position = latLng;
    this.title = title;
    // Sets the info window.
    this.content = content;
  }
}
