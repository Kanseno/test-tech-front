import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QuizComponent } from './views/quiz/quiz.component';
import { ShellComponent } from './components/shell/shell.component';
import { ResultsComponent } from './views/results/results.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quiz',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: QuizComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
