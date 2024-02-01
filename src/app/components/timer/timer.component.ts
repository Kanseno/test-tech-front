import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  router = inject(Router);
  @Input() time: number = 120;
  @Output() timedOut = new EventEmitter(false);
  timeSub: Subscription;

  constructor() {
    this.timeSub = interval(1000).subscribe(() => {
      this.time--;
      if (this.time === 0) {
        this.timedOut.emit(true);
      }
    });
  }
}
