export interface Question {
  label: string;
  answerType: 'choice' | 'text' | 'multiple-choice';
  choices: string[];
  answers?: string[];
  answer?: string;
}
