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
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Question question={questionTest}></Question>
    </div>
  );
}
