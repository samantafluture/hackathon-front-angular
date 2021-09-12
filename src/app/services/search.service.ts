import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hackathon, Hackathons } from '../interfaces/hackathon';
import { map } from 'rxjs/operators';

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
            this.sortByPrice(hackathonA, hackathonB)
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
            this.sortByDate(hackathonA, hackathonB)
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
          hackathons.filter((hackathon) => this.isFree(hackathon))
        )
      );
  }

  public searchHackathonRemote(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.http
      .get<Hackathons>(`${API}/event/search`, { params })
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon) => this.isRemoteAvaiable(hackathon))
        )
      );
  }

  private sortByPrice(hackathonA: Hackathon, hackathonB: Hackathon) {
    if (hackathonA.price > hackathonB.price) {
      return 1;
    }
    if (hackathonA.price < hackathonB.price) {
      return -1;
    }
    return 0;
  }

  private sortByDate(hackathonA: Hackathon, hackathonB: Hackathon) {
    let dateA = new Date(hackathonA.date);
    let dateB = new Date(hackathonB.date);

    if (dateA > dateB) {
      return 1;
    }
    if (dateA < dateB) {
      return -1;
    }
    return 0;
  }

  private isFree(hackathon: Hackathon) {
    const freeHackthon = hackathon.price === 0 ? true : false;
    return freeHackthon;
  }

  private isRemoteAvaiable(hackathon: Hackathon) {
    const remoteHackathon =
      hackathon.location.includes('Remote') ||
      hackathon.location.includes('remote') ||
      hackathon.location.includes('Online') ||
      hackathon.location.includes('online') ||
      hackathon.location.includes('Virtual') ||
      hackathon.location.includes('virtual')
        ? true
        : false;
    return remoteHackathon;
  }
}
