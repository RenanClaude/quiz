import QuestionModel from "@/model/QuestionModel";
import styles from "../styles/Question.module.css";
import Alternative from "./Alternative";
import StatementQuestion from "./StatementQuestion";

interface QuestionProps {
  question: QuestionModel
}

export default function Question(props: QuestionProps) {
  const { question } = props;

  function renderAlternatives() {
    return question.alternatives.map((alternative, index) => (<Alternative alternative={alternative} index={index} letter="A" letterBackGroundColor="#F2C866" key={index} />))
  }

  return (
    <div className={styles.question}>
      <StatementQuestion text={question.statementQuestion} />
      {renderAlternatives()}
    </div>
  )
}