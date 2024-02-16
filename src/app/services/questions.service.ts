import { Injectable, inject } from '@angular/core';
import { QuestionTypes } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  http = inject(HttpClient);

  questions$ = new BehaviorSubject<QuestionTypes[]>([]);
  loaded: boolean = false;
  loadQuestions(): Observable<QuestionTypes[]> {
    return this.http
      .get<QuestionTypes[]>(
        'https://storage.googleapis.com/netwo-public/quizz.json'
      )
      .pipe(
        tap((qs) => this.questions$.next(qs)),
        tap(() => (this.loaded = true))
      );
  }
}
