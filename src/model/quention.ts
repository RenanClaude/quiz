import { shuffle } from "@/functions/array";
import AlternativeModel from "./alternative";

export default class QuestionModel {
  #id: number;
  #statementQuestion: string;
  #alternatives: AlternativeModel[];
  #gotItRight: boolean;

  constructor(id: number, statementQuestion: string, alternatives: AlternativeModel[], gotItRight = false) {
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
    for (let alternative of this.#alternatives) {
      if (alternative.revealed === true) return true;
    }
    return false;
  }

  shuffleAlternatives() {
    const scrambledAlternatives = shuffle(this.#alternatives);
    return new QuestionModel(this.#id, this.#statementQuestion, scrambledAlternatives, this.#gotItRight);
  }

  toObject() {
    return {
      id: this.#id,
      statementQuestion: this.#statementQuestion,
      alternatives: this.#alternatives.map((alternative) => (alternative.toObject())),
      gotItRight: this.#gotItRight
    }
  }

}