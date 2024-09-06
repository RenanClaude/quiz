import QuestionModel from "@/model/QuestionModel"
import styles from "../styles/Questionnaire.module.css"
import Button from "./Button"
import Question from "./Question"

interface QuestionnaireProps {
  question: QuestionModel,
  lastQuestion: boolean,
  questionAnswered: (question: QuestionModel) => void,
  goToTheNextScenario: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {

  function chosenAlternative(index: number) {
    if(props.question.notAnswered) {
     props.questionAnswered(props.question.answerWith(index));
    }
  }

  return (
    <div className={styles.questionnaire}>
      {props.question ?
        <Question question={props.question} timeToAnswer={10} chosenAlternative={chosenAlternative} timeOut={props.goToTheNextScenario} /> :
        "Carregando..."
      }
      <Button onClick={props.goToTheNextScenario} text={props.lastQuestion ? "Finalizar!" : "Próxima questão"} />
    </div>
  )
}