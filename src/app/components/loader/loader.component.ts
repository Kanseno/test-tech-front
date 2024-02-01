import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: ` <span class="loader"></span> `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {}
