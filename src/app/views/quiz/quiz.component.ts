import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { QuestionComponent } from '../../components/question/question.component';
import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgForOf, AsyncPipe, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  quizService: QuizService = inject(QuizService);
  @Input() questions!: Question[];
  @Input() step!: number;
  @Output() answered = new EventEmitter();

  constructor() {}

  onAnswer(event: any, index: number) {
    this.quizService.addAnswer({
      label: this.questions[index].label,
      response: event,
      isCorrect: event === this.questions[index].answer
    });
    this.answered.emit(true);
  }
}
