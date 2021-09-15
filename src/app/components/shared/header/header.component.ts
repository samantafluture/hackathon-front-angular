import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brandName: string = "Hackafy";
  profilePhoto = "https://hostmyimg.s3.amazonaws.com/samanta.jpeg"
  username = "Samanta Fluture"

  constructor() { }

  ngOnInit(): void {
  }

}
