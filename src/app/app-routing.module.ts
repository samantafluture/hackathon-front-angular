import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHackathonComponent } from './components/pages/hackathons/add-hackathon/add-hackathon.component';
import { EditHackathonComponent } from './components/pages/hackathons/edit-hackathon/edit-hackathon.component';
import { ListHackathonComponent } from './components/pages/hackathons/list-hackathon/list-hackathon.component';

const routes: Routes = [
  {
    path: '',
    component: ListHackathonComponent,
  },
  {
    path: 'hackathons',
    component: ListHackathonComponent,
  },
  {
    path: 'add',
    component: AddHackathonComponent,
  },
  {
    path: 'edit/:id',
    component: EditHackathonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
