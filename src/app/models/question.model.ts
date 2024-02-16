interface Question {
  label: string;
  choices: string[];
}
export interface QuestionSimpleChoice extends Question {
  answer: string;
  answerType: 'choice';
}
export interface QuestionSimpleText extends Question {
  answer: string;
  answerType: 'text';
}
export interface QuestionMultipleChoices extends Question {
  answers: string[];
  answerType: 'multiple-choice';
}

export const getAnswer = (question: QuestionTypes) => {
  return 'answer' in question ? question.answer : question.answers.toString();
};

export type QuestionTypes =
  | QuestionSimpleChoice
  | QuestionSimpleText
  | QuestionMultipleChoices;
