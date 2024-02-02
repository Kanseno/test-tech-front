import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription, interval, tap } from 'rxjs';
import { Question } from '../../models/question.model';
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
  time = 1200;
  showTitles: boolean = true;
  showResults: boolean = false;
  amountOfQuestions: number = 0;
  questions$: Observable<Question[]>;
  constructor() {
    this.questions$ = this.questionsService.questions$.pipe(
      tap((qs) => (this.amountOfQuestions = qs.length))
    );
    this.initTimer();
  }

  onAnswered() {
    if (this.step === this.amountOfQuestions) {
      this.showTitles = false;
      this.showResults = true;
    }
    this.step++;
  }

  initTimer() {
    const sub: Subscription = interval(1000).subscribe(() => {
      this.time--;
      if (this.time === 0) {
        this.showTitles = false;
        this.showResults = true;
        sub.unsubscribe();
      }
    });
  }
}
