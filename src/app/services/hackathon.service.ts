import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hackathon, Hackathons } from '../interfaces/hackathon';
import { map } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class HackathonService {
  constructor(private http: HttpClient) {}

  /* TODO
  *
  * [1] get free hackathons method (sorted by dates)
  * [2] get remote hackathons method (sorted by date)
  * [3] extract 'sortedBy...' funcs to a helper folder
  * [4] create toggle btns for the new methods
  * */

  public getAllHackathons() {
    return this.http
      .get<Hackathons>(`${API}/event/all`)
      .pipe(
        map((hackathons) =>
          hackathons.sort((hackathonA, hackathonB) =>
            this.sortByDate(hackathonA, hackathonB)
          )
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
}
