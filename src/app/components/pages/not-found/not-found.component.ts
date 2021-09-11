import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  quotes: any = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((data) => this.quotes.push(data));
  }
}
