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

  public searchHackathons(value?: string) {
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

  private sortByPrice(hackathonA: Hackathon, hackathonB: Hackathon) {
    if (hackathonA.price > hackathonB.price) {
      return 1;
    }
    if (hackathonA.price < hackathonB.price) {
      return -1;
    }
    return 0;
  }
}
