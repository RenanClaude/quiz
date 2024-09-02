export default class QuestionModel {
  #id: number;
  #statementQuestion: string;
  #alternatives: any[];
  #gotItRight: boolean;
  // #answered: boolean;

  constructor(id: number, statementQuestion: string, alternatives: any[], gotItRight: boolean) {
    this.#id = id;
    this.#statementQuestion = statementQuestion;
    this.#alternatives = alternatives;
    this.#gotItRight = gotItRight;
  }

  get id() {
    return this.#id;
  }

  get statementQuestion() {
    return this.#statementQuestion;
  }

  get alternatives() {
    return this.#alternatives;
  }

  get gotItRight() {
    return this.#gotItRight;
  }

  get answered() {
    // fixme
    return false;
  }

}