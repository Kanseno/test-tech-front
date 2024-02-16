import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { Observable, interval, tap } from 'rxjs';
import { QuestionTypes } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { QuizComponent } from '../../views/quiz/quiz.component';
import { ResultsComponent } from '../../views/results/results.component';
import { HeaderComponent } from '../header/header.component';

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
  step = 1;
  time = 120;
  showTitles: boolean = true;
  showResults: boolean = false;
  amountOfQuestions: number = 0;
  questions$: Observable<QuestionTypes[]>;
  constructor() {
    this.questions$ = this.questionsService.questions$;
    this.initTimer();
  }

  onAnswered(step: number, questions: QuestionTypes[]) {
    if (step === questions.length) {
      this.router.navigate(['results']);
    }
    this.step++;
  }

  initTimer() {
    interval(1000)
      .pipe(
        takeUntilDestroyed(),
        tap(() => {
          this.time--;
          if (this.time === 0) {
            this.router.navigate(['results']);
          }
        })
      )
      .subscribe();
  }
}
