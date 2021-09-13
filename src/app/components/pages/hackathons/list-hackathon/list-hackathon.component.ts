import { Component, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/interfaces/hackathon';
import { HackathonService } from 'src/app/services/hackathon.service';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { isFree, isRemoteAvaiable, matchLocation } from 'src/app/utils/filters';

const TYPING_DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-list-hackathon',
  templateUrl: './list-hackathon.component.html',
  styleUrls: ['./list-hackathon.component.css'],
})
export class ListHackathonComponent implements OnInit {
  hackathons: Hackathon[] = [];
  hackathonId!: string;
  location!: string;

  searchInput = new FormControl();

  allHackthons$ = this.hackathonService.getAllHackathons();
  filteredByInput$ = this.searchInput.valueChanges.pipe(
    debounceTime(TYPING_DEBOUNCE_TIME),
    filter((typedValue) => typedValue.length >= 3 || !typedValue.length),
    distinctUntilChanged(),
    switchMap((typedValue) =>
      this.searchService.searchHackathonDate(typedValue)
    )
  );
  freeHackathons$ = this.hackathonService
    .getAllHackathons()
    .pipe(
      map((hackathons) => hackathons.filter((hackathon) => isFree(hackathon)))
    );
  remoteHackathons$ = this.hackathonService
    .getAllHackathons()
    .pipe(
      map((hackathons) =>
        hackathons.filter((hackathon) => isRemoteAvaiable(hackathon))
      )
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

  filterFree() {
    this.hackathons$ = this.freeHackathons$;
  }

  filterRemote() {
    this.hackathons$ = this.remoteHackathons$;
  }

  clear() {
    this.hackathons$ = this.allHackthons$;
  }

  filterLocation(location: string) {
    this.location = location;

    this.hackathons$ = this.hackathonService
      .getAllHackathons()
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon: Hackathon) =>
            matchLocation(hackathon, this.location)
          )
        )
      );
  }
}
