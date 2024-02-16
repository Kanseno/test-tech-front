import { AsyncPipe, NgForOf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { QuestionComponent } from '../../components/question/question.component';
import {
  QuestionTypes,
  getAnswer
} from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgForOf, AsyncPipe, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  router: Router = inject(Router);
  quizService: QuizService = inject(QuizService);
  @Input() questions!: QuestionTypes[];
  @Input() step!: number;
  @Output() answered = new EventEmitter<void>();

  ngOnInit(): void {
    if (!this.questions.length) {
      this.router.navigate(['']);
    }
  }

  onAnswer(event: string, index: number) {
    this.quizService.addAnswer({
      label: this.questions[index].label,
      response: event,
      isCorrect: event === getAnswer(this.questions[index]),
    });

    this.answered.emit();
  }
}
