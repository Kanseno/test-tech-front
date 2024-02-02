import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Answer } from '../../models/answer.model';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  quizService: QuizService = inject(QuizService);
  answers: Answer[];
  score: string;
  total: string;
  constructor() {
    this.answers = this.quizService.getAnswers();
    this.total = ('0' + this.answers.length).slice(-2);
    this.score = ('0' + this.answers.filter((a) => a.isCorrect).length).slice(
      -2
    );
  }
}
