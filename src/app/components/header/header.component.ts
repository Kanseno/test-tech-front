import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="header">
    <ng-content></ng-content>
  </section>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
