import QuestionModel from "@/model/QuestionModel";;
import styles from "../styles/Question.module.css";;
import StatementQuestion from "./StatementQuestion";

interface QuestionProps {
  question: QuestionModel
}

export default function Question(props: QuestionProps) {

  const { question } = props;

  return (
    <div className={styles.question}>
      <StatementQuestion text={question.statementQuestion} />
    </div>
  )
}