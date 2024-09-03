import Question from "@/components/Question";
import AlternativeModel from "@/model/AlternativeModel";
import QuestionModel from "@/model/QuestionModel";
import styles from "@/styles/Home.module.css";

export default function Home() {

  const questionTest = new QuestionModel(1, "Melhor cor?", [
    AlternativeModel.incorrect("Vermelho"),
    AlternativeModel.incorrect("Verde"),
    AlternativeModel.incorrect("Amarelo"),
    AlternativeModel.incorrect("Azul")
  ]
  )

  return (
    <Question question={questionTest}></Question>
  );
}
