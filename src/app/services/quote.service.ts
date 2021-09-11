import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Quotes } from '../interfaces/quote';

const API = environment.quoteUrl;

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  public getQuote() {
    return this.http.get<Quotes>(API);
  }
}
