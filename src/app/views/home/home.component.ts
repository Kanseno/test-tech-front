import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, share } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Question } from '../../models/question.model';
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

  questions$: Observable<Question[]>;

  constructor() {
    this.questionsService.loadQuestions().subscribe();
    this.questions$ = this.questionsService.questions$;
  }

  onClick() {
    this.router.navigate(['quiz']);
  }
}
