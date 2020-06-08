export interface Question {
  prompt: string;
  anwer: number;
  penalty: number;
}

export class Quiz {
  constructor(
    public id: number,
    public desc: string,
    public questions: Question[] = []
  ) {}

  public addQuestion(q: Question) {
    this.questions.push(q);
  }
}
