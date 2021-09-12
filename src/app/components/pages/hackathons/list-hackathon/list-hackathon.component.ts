import { Component, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { HackathonService } from 'src/app/services/hackathon.service';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap
} from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';

const TYPING_DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-list-hackathon',
  templateUrl: './list-hackathon.component.html',
  styleUrls: ['./list-hackathon.component.css'],
})
export class ListHackathonComponent implements OnInit {
  hackathons: Hackathon[] = [];
  hackathonId!: string

  searchInput = new FormControl();
  allHackthons$ = this.hackathonService.getAllHackathons();
  filteredByInput$ = this.searchInput.valueChanges.pipe(
    debounceTime(TYPING_DEBOUNCE_TIME),
    filter((typedValue) => typedValue.length >= 3 || !typedValue.length),
    distinctUntilChanged(),
    switchMap((typedValue) => this.searchService.searchHackathonDate(typedValue))
  );

  hackathons$ = merge(this.allHackthons$, this.filteredByInput$);

  constructor(
    private hackathonService: HackathonService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.hackathonService
      .getAllHackathons()
      .subscribe((data) => (this.hackathons = data));
  }

  remove(id: any) {
    this.hackathonService.removeHackathon(id).subscribe(
      (data) => {
        console.log('hackathon removed');
        this.ngOnInit();
        this.hackathons$ = merge(this.allHackthons$, this.filteredByInput$);
      },
      (error) => console.log(error)
    );
  }


}
