import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHackathonComponent } from './components/pages/hackathons/list-hackathon/list-hackathon.component';
import { SharedModule } from './components/shared/shared.module';
import { AddHackathonComponent } from './components/pages/hackathons/add-hackathon/add-hackathon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListHackathonComponent, AddHackathonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
