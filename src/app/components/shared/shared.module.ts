import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonFormComponent } from './hackathon-form/hackathon-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HackathonFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [HackathonFormComponent],
})
export class SharedModule {}
