import { Injectable, inject } from '@angular/core';
import { Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  http = inject(HttpClient);

  questions$ = new BehaviorSubject<Question[]>([]);
  loaded: boolean = false;
  loadQuestions(): Observable<Question[]> {
    return this.http
      .get<Question[]>('https://storage.googleapis.com/netwo-public/quizz.json')
      .pipe(
        tap((qs) => this.questions$.next(qs)),
        tap(() => (this.loaded = true))
      );
  }
}
