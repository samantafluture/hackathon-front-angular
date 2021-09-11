import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { HackathonService } from 'src/app/services/hackathon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-hackathon',
  templateUrl: './add-hackathon.component.html',
  styleUrls: ['./add-hackathon.component.css'],
})
export class AddHackathonComponent implements OnInit {
  hackathon!: Hackathon;
  Date!: Date;

  constructor(
    private location: Location,
    private hackathonService: HackathonService,
    private router: Router
  ) {
    this.hackathon = {
      name: '',
      description: '',
      price: 0,
      location: '',
      date: this.Date,
      url: '',
    };
  }

  ngOnInit(): void {
    this.hackathon = {
      name: '',
      description: '',
      price: 0,
      location: '',
      date: this.Date,
      url: '',
    };
  }

  cancel() {
    this.location.back();
    return false;
  }

  add(hackathon: Hackathon): void {
    this.hackathonService.addHackathon(hackathon).subscribe(
      () => {
        console.log('adicionado');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    );
  }
}
