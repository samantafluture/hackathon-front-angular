import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hackathons } from '../interfaces/hackathon';
import { map } from 'rxjs/operators';
import { sortByDate, sortByPrice, isFree, isRemoteAvaiable } from '../utils/filters';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  /* TODO
  *
  * [1] create new filter by location:
  *     if user search params contains or match hackathon.location,
  *     show filtered results by this location
  * [2] create a search bar for this feature:
  *     with address autocomplete,
  *     permitting only address
  * */

  public searchHackathonPrice(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.http
      .get<Hackathons>(`${API}/event/search`, { params })
      .pipe(
        map((hackathons) =>
          hackathons.sort((hackathonA, hackathonB) =>
            sortByPrice(hackathonA, hackathonB)
          )
        )
      );
  }

  public searchHackathonDate(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.http
      .get<Hackathons>(`${API}/event/search`, { params })
      .pipe(
        map((hackathons) =>
          hackathons.sort((hackathonA, hackathonB) =>
            sortByDate(hackathonA, hackathonB)
          )
        )
      );
  }

  public searchHackathonFree(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.http
      .get<Hackathons>(`${API}/event/search`, { params })
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon) => isFree(hackathon))
        )
      );
  }

  public searchHackathonRemote(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.http
      .get<Hackathons>(`${API}/event/search`, { params })
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon) => isRemoteAvaiable(hackathon))
        )
      );
  }

}
