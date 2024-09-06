import Button from "@/components/Button";
import Statistic from "@/components/Statistic";
import { useRouter } from "next/router";
import styles from "../styles/ResultPage.module.css";

export default function Result() {
  const router = useRouter();

  const total = Number(router.query.total);
  const numberOfCorrectAnswers = Number(router.query.corrects);
  const hitPercentage = Math.round((numberOfCorrectAnswers / total) * 100);
  let colorOfTheHitPercentage = "";

  if (hitPercentage <= 33) {
    colorOfTheHitPercentage = "#ff6a6a";
  } else if (hitPercentage <= 67 && hitPercentage > 33) {
    colorOfTheHitPercentage = "#fff16a";
  } else {
    colorOfTheHitPercentage = "#86db70";
  }


  return (
    <div className={styles.result}>
      <h1>Resultado final</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Statistic text="Respondidas" value={total} backgroundColor="#ffffff"/>
        <Statistic text="Acertos" value={numberOfCorrectAnswers} backgroundColor="#88d6ff" />
        <Statistic text="Aproveitamento" value={`${hitPercentage}%`} backgroundColor={colorOfTheHitPercentage} />
      </div>
      <Button href="/" text="Jogar novamente!" />
    </div>
  )
}