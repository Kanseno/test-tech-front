import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="header">
    @if(showTitles){
    <div routerLink="/" class="left-title">
      {{ leftTitle }}
    </div>
    <div class="right-title">
      {{ rightTitle }}
    </div>
    }
  </section>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() showTitles: boolean = false;
  @Input() leftTitle?: string;
  @Input() rightTitle?: string;
}
