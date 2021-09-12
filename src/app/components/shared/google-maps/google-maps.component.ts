import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  ElementRef,
} from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit, OnChanges {
  @Input()
  center!: google.maps.LatLng;

  @Input()
  zoom!: number;

  @Input()
  disableDefaultUI!: boolean;

  @Input()
  disableDoubleClickZoom!: boolean;

  @Input()
  mapTypeId!: google.maps.MapTypeId;

  @Input()
  maxZoom!: number;

  @Input()
  minZoom!: number;

  @Input()
  styles!: google.maps.MapTypeStyle[];

  constructor(public map: MapService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector('#map');
    this.createMap(el);
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes['center']) { this.map.setCenter(this.center); }
    if (changes['zoom']) { this.map.setZoom(this.zoom); }
  }

  private createMap(el: HTMLElement): void {
    this.map.initMap(el, {
        center: this.center,
        disableDefaultUI: this.disableDefaultUI,
        disableDoubleClickZoom: this.disableDoubleClickZoom,
        mapTypeId: this.mapTypeId,
        maxZoom: this.maxZoom as number,
        minZoom: this.minZoom as number,
        styles: this.styles,
        zoom: this.zoom as number
    });
}

}
