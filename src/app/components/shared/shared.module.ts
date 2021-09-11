import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonFormComponent } from './hackathon-form/hackathon-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HackathonFormComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HackathonFormComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
