import { Component, Input, inject } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  router: Router = inject(Router);
  isTimedOut: boolean = false;
  @Input() showTitles: boolean = true;
  @Input() leftTitle?: string;
  @Input() rightTitle?: string;

  onTimedOut(bool: boolean) {
    this.router.navigate(['quiz', 'results']);
    this.isTimedOut = bool;
  }
}
