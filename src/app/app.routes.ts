import { Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { HomeComponent } from './views/home/home.component';
import { ResultsComponent } from './views/results/results.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quiz',
    component: ShellComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
];
