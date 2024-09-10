import Questionnaire from "@/components/Questionnaire";
import QuestionModel from "@/model/QuestionModel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BASE_URL = "https://quiz-app-sepia-psi.vercel.app/api";

export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>();
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState<number>(0);
  const router = useRouter();
  const time = Number(router.query.time);
  const totalQuestions = Number(router.query.totalQuestions);


  async function loadQuestionIds(totalQuestions: number) {
    const res = await fetch(`${BASE_URL}/questionario`);
    const resQuestionIds: Array<number> = await res.json();
    resQuestionIds.length = totalQuestions;
    setQuestionIds(resQuestionIds);
  }

  async function loadQuestion(id: number) {
    const res = await fetch(`${BASE_URL}/questoes/${id}`);
    const resQuestion = await res.json();
    setQuestion(QuestionModel.createFromAnObject(resQuestion));
  }

  useEffect(() => {
    loadQuestionIds(totalQuestions);
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds]);

  function answerTheQuestion(question: QuestionModel) {
    setQuestion(question);
    const gotItRight = question.gotItRight;
    setNumberOfCorrectAnswers(numberOfCorrectAnswers + (gotItRight ? 1 : 0));
  }

  function getIdOfTheNextQuestion() {
    if (question) {
      const indexOfTheNextQuestion = questionIds.indexOf(question.id) + 1;
      return questionIds[indexOfTheNextQuestion];
    }
  }

  function goToTheNextQuestion(idOfTheNextQuestion: number) {
    loadQuestion(idOfTheNextQuestion);
  }

  function finish() {
    router.push({ pathname: "/resultado", query: { total: questionIds.length, corrects: numberOfCorrectAnswers } });
  }

  function goToTheNextScenario() {
    const idOfTheNextQuestion = getIdOfTheNextQuestion();
    idOfTheNextQuestion ? goToTheNextQuestion(idOfTheNextQuestion) : finish();
  }

  return question ? (
    <Questionnaire
      question={question}
      lastQuestion={getIdOfTheNextQuestion() === undefined}
      questionAnswered={answerTheQuestion}
      goToTheNextScenario={goToTheNextScenario}
      time={time}
    />) :
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Carregando...</h1>
    </div>
}
