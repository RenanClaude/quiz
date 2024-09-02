export default class AlternativeModel {
  #value: string;
  #correct: boolean;
  #revealed: boolean;

  constructor(value: string, correct: boolean, revealed = false) {
    this.#value = value;
    this.#correct = correct;
    this.#revealed = revealed;
  }

  static correct(value: string) {
    return new AlternativeModel(value, true);
  }

  static incorrect(value: string) {
    return new AlternativeModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get revealed() {
    return this.#revealed;
  }

  toObject() {
    return {
      value: this.#value,
      correct: this.#correct,
      revealed: this.#revealed,
    }
  }
}