import Question from "@/components/Question";
import AlternativeModel from "@/model/AlternativeModel";
import QuestionModel from "@/model/QuestionModel";
import { useEffect, useRef, useState } from "react";

const questionMock = new QuestionModel(1, "Melhor cor?", [
  AlternativeModel.incorrect("Vermelho"),
  AlternativeModel.incorrect("Verde"),
  AlternativeModel.incorrect("Amarelo"),
  AlternativeModel.correct("Azul")
]
)

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  function chosenAlternative(index: number) {
    setQuestion(question.answerWith(index))
  }

  function timeOut() {
    if (question.notAnswered) {
      setQuestion(question.answerWith(-1))
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Question
        question={question}
        timeToAnswer={5}
        chosenAlternative={chosenAlternative}
        timeOut={timeOut}
      />
    </div>
  );
}
