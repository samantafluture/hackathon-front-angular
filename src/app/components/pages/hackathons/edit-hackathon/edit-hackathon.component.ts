import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { HackathonService } from 'src/app/services/hackathon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-hackathon',
  templateUrl: './edit-hackathon.component.html',
  styleUrls: ['./edit-hackathon.component.css'],
})
export class EditHackathonComponent implements OnInit {
  hackathon!: Hackathon;
  Date!: Date;

  constructor(
    private location: Location,
    private hackathonService: HackathonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getHackathon(id);
  }

  getHackathon(id: any) {
    this.hackathonService.getHackathonById(id).subscribe((hackathon) => {
      this.hackathon = hackathon;
    });
  }

  cancel() {
    this.location.back();
    return false;
  }

  edit(hackathon: Hackathon): void {
    this.hackathonService.editHackathon(hackathon).subscribe(
      () => {
        console.log('hackathon updated');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    );
  }
}
