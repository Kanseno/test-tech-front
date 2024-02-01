import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  step = new Subject();
  answers: { label: string; response: string; isCorrect: boolean }[] = [];
  addAnswer(answer: { label: string; response: string; isCorrect: boolean }) {
    this.answers.push(answer);
  }
  constructor() {}
}
