import Questionnaire from "@/components/Questionnaire";
import AlternativeModel from "@/model/AlternativeModel";
import QuestionModel from "@/model/QuestionModel";
import { useState } from "react";

const questionMock = new QuestionModel(1, "Melhor cor?", [
  AlternativeModel.incorrect("Vermelho"),
  AlternativeModel.incorrect("Verde"),
  AlternativeModel.incorrect("Amarelo"),
  AlternativeModel.correct("Azul")
]
)

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

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
