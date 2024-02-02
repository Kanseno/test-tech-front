import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  step = new Subject();
  answers: Answer[] = [];
  addAnswer(answer: Answer) {
    this.answers.push(answer);
  }

  getAnswers() {
    return this.answers;
  }
}
