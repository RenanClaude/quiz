import QuestionModel from "@/model/QuestionModel"
import styles from "../styles/Question.module.css"

interface QuestionProps {
  question: QuestionModel
}

export default function Question(props: QuestionProps) {

  const { question } = props;

  return (
    <div className={styles.question}>
      <h1>Questão</h1>
    </div>
  )
}