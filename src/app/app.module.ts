import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHackathonComponent } from './components/pages/hackathons/list-hackathon/list-hackathon.component';
import { SharedModule } from './components/shared/shared.module';
import { AddHackathonComponent } from './components/pages/hackathons/add-hackathon/add-hackathon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditHackathonComponent } from './components/pages/hackathons/edit-hackathon/edit-hackathon.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListHackathonComponent,
    AddHackathonComponent,
    EditHackathonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
