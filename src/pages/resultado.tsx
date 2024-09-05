import Statistic from "@/components/Statistic";
import { useRouter } from "next/router";
import styles from "../styles/ResultPage.module.css";
import Button from "@/components/Button";

export default function Result() {
  const router = useRouter();

  const total = Number(router.query.total);
  const numberOfCorrectAnswers = Number(router.query.corrects);

  const hitPercentage = Math.round((numberOfCorrectAnswers / total) * 100);



  return (
    <div className={styles.result}>
      <h1>Resultado final</h1>
      <div style={{display: "flex"}}>
        <Statistic text="Questões respondidas" value={total} />
        <Statistic text="Questões acertadas" value={numberOfCorrectAnswers} backgroundColor="#9cd2a4"/>
        <Statistic text="Aproveitaento" value={`${hitPercentage}%`} backgroundColor="#de6a33"/>
      </div>
      <Button href="/" text="Jogar novamente!"/>
    </div>
  )
}