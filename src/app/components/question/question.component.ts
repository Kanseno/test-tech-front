import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import { NgForOf, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ButtonComponent } from '../button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatInputModule,
    MatRadioModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() response = new EventEmitter();

  answer?: string;

  onClick() {
    if (this.answer) {
      this.response.emit(this.answer);
    }
  }
}
