import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, RouterModule, FormsModule, ClockComponent]
})
export class SharedModule {}
