import Questionnaire from "@/components/Questionnaire";
import AlternativeModel from "@/model/AlternativeModel";
import QuestionModel from "@/model/QuestionModel";
import { useEffect, useState } from "react";

const questionMock = new QuestionModel(1, "Melhor cor?", [
  AlternativeModel.incorrect("Vermelho"),
  AlternativeModel.incorrect("Verde"),
  AlternativeModel.incorrect("Amarelo"),
  AlternativeModel.correct("Azul")
]);

const BASE_URL = "http://localhost:3000/api";


export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>(questionMock);
  const [questionIds, setQuestionIds] = useState<number[]>([]);

  async function loadQuestionIds() {
    const res = await fetch(`${BASE_URL}/questionario`);
    const resQuestionIds = await res.json();
    setQuestionIds(resQuestionIds);
  }

  async function loadQuestion(id: number) {
    const res = await fetch(`${BASE_URL}/questoes/${id}`);
    const resQuestion = await res.json();
    setQuestion(QuestionModel.createFromAnObject(resQuestion));
    console.log(QuestionModel.createFromAnObject(resQuestion))
  }

  useEffect(() => {
    loadQuestionIds();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds]);

  function chosenAlternative(question: QuestionModel) {

  }

  function goToTheNextScenario() {

  }

  return (
    <Questionnaire
      question={question}
      // lastQuestion={true}
      questionAnswered={chosenAlternative}
      goToTheNextScenario={goToTheNextScenario}
    />
  );
}
