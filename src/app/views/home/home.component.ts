import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, first } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { QuestionTypes } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, LoaderComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private questionsService = inject(QuestionsService);
  private router = inject(Router);

  questions$: Observable<QuestionTypes[]>;

  constructor() {
    /**
     * delay operator is for Demo purpose only
     */
    this.questionsService.loadQuestions().pipe(first()).subscribe();
    this.questions$ = this.questionsService.questions$.pipe(delay(1000));
  }

  onClick() {
    this.router.navigate(['quiz']);
  }
}
