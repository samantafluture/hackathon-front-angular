import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-list-hackathon',
  templateUrl: './list-hackathon.component.html',
  styleUrls: ['./list-hackathon.component.css'],
})
export class ListHackathonComponent implements OnInit {
  hackathons: Hackathon[] = [];
  hackathonId!: string;

  constructor(
    private hackathonService: HackathonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hackathonService
      .getAllHackathons()
      .subscribe((data) => (this.hackathons = data));
  }

  remove(id: any) {
    this.hackathonService.removeHackathon(id).subscribe(
      () => {
        console.log('removido');
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  edit(id: any, hackathon: Hackathon) {}
}
