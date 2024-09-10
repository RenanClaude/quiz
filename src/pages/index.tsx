import NumericImput from "@/components/NumericInput";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  const [timeForEachQuestion, setTimeForEachQuestion] = useState<number>(30);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [maxNumOfQuestions, setMaxNumOfQuestions] = useState(1);
  const router = useRouter();
  const BASE_URL = "https://quiz-app-sepia-psi.vercel.app/api";

  useEffect(() => {
    loadAllQuestionIds();
  }, []);

  async function loadAllQuestionIds() {
    const res = await fetch(`${BASE_URL}/questionario`);
    const resQuestionIds: Array<number> = await res.json();
    setMaxNumOfQuestions(resQuestionIds.length);
  }

  function play() {
    router.push({
      pathname: "/quiz",
      query: { time: timeForEachQuestion, totalQuestions: numberOfQuestions },
    });
  }

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Quiz App</h1>

      <div>
        <NumericImput
          onChange={(time) => setTimeForEachQuestion(time)}
          text="Tempo para cada questão:"
          valueToShow={`${timeForEachQuestion}s`}
          value={timeForEachQuestion}
          maxNumOfQuestions={maxNumOfQuestions} />

        <NumericImput
          onChange={(n) => setNumberOfQuestions(n)}
          text="Quantidade de questões:"
          valueToShow={numberOfQuestions}
          value={numberOfQuestions}
          maxNumOfQuestions={maxNumOfQuestions} />
      </div>

      <button onClick={play}>Jogar!</button>

    </div>
  )
}