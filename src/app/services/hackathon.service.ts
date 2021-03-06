import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hackathon, Hackathons } from '../interfaces/hackathon';
import { map } from 'rxjs/operators';
import { sortByDate, isFree, isRemoteAvaiable } from '../utils/filters';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class HackathonService {
  constructor(private http: HttpClient) {}

  public getAllHackathons() {
    return this.http
      .get<Hackathons>(`${API}/event/all`)
      .pipe(
        map((hackathons) =>
          hackathons.sort((hackathonA, hackathonB) =>
            sortByDate(hackathonA, hackathonB)
          )
        )
      );
  }

  public getFreeHackathons() {
    return this.http
      .get<Hackathons>(`${API}/event/all`)
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon) => isFree(hackathon))
        )
      );
  }

  public getRemoteHackathons() {
    return this.http
      .get<Hackathons>(`${API}/event/all`)
      .pipe(
        map((hackathons) =>
          hackathons.filter((hackathon) => isRemoteAvaiable(hackathon))
        )
      );
  }

  public getHackathonById(id: any) {
    return this.http.get<Hackathon>(`${API}/event/find/${id}`);
  }

  public addHackathon(hackathon: Hackathon) {
    return this.http.post<Hackathon>(`${API}/event/create`, hackathon, {
      observe: 'response',
    });
  }

  public editHackathon(hackathon: Hackathon) {
    const url = `${API}/event/update/${hackathon._id}`;
    return this.http.put<Hackathon>(url, hackathon);
  }

  public removeHackathon(id: any) {
    return this.http.delete<Hackathon>(`${API}/event/delete/${id}`);
  }
}
