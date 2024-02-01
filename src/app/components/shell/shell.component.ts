import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Observable, Subscription, interval, share, tap } from 'rxjs';
import { Question } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { QuizComponent } from '../../views/quiz/quiz.component';
import { ResultsComponent } from '../../views/results/results.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule,
    AsyncPipe,
    QuizComponent,
    ResultsComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  questionsService: QuestionsService = inject(QuestionsService);
  router: Router = inject(Router);
  timeSub: Subscription;
  step = 1;
  time = 120;
  showTitles: boolean = true;
  amountOfQuestions: number = 0;
  questions$: Observable<Question[]>;
  constructor() {
    this.questions$ = this.questionsService.questions$.pipe(
      tap((qs) => (this.amountOfQuestions = qs.length))
    );

    this.timeSub = interval(1000).subscribe(() => {
      this.time--;
      if (this.time === 0) {
      }
    });
  }

  onAnswered() {
    if (this.step === this.amountOfQuestions) {
      this.showTitles = false;
    }
    this.step++;
  }
}
