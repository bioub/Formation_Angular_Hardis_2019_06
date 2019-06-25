import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ab-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  @Input() format = 'HH:mm:ss';
  @Input() intervalMs = 1000;
  now = new Date();

  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, this.intervalMs);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
