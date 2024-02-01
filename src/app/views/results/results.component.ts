import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  quizService: QuizService = inject(QuizService);

  constructor() {
    console.log(this.quizService.answers);
  }
}
