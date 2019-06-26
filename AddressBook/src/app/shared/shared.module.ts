import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule],
  exports: [CommonModule, RouterModule, ClockComponent]
})
export class SharedModule {}
