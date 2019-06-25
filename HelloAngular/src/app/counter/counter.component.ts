import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  step = 1;
  count = 0;
  increment() {
    this.count += this.step;
  }
  setStep(step) {
    this.step = Number(step);
  }
}
