import NumericImput from "@/components/NumericInput";
import { useState } from "react";
import styles from "../styles/HomePage.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function HomePage() {
  const [timeForEachQuestion, setTimeForEachQuestion] = useState<number>(30);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const router = useRouter();

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
        <NumericImput onChange={(time) => setTimeForEachQuestion(time)} text="Tempo para cada questão:" valueToShow={`${timeForEachQuestion}s`} value={timeForEachQuestion} />
        <NumericImput onChange={(n) => setNumberOfQuestions(n)} text="Quantidade de questões:" value={numberOfQuestions} valueToShow={numberOfQuestions} />
      </div>

      <button onClick={play}>Jogar!</button>

    </div>
  )
}