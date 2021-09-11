import { Component, Input, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hackathon-form',
  templateUrl: './hackathon-form.component.html',
  styleUrls: ['./hackathon-form.component.css'],
})
export class HackathonFormComponent implements OnInit {
  @Input() btnName: string = '';
  @Input() hackathon!: Hackathon;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }
}
