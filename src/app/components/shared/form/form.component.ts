import { Component, Input, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() btnName: string = '';
  @Input() hackathon!: Hackathon;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }
}
