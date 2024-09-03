import AlternativeModel from "@/model/AlternativeModel";
import styes from "../styles/Alternative.module.css";;

interface AlternativeProps {
  alternative: AlternativeModel,
  index: number,
  letter: string,
  letterColor: string
}

export default function Alternative(props: AlternativeProps) {
  const { alternative, index, letter, letterColor } = props;

  return (
    <div className={styes.alternative}>

      <div className={styes.alternativeContent}>

        <div className={styes.front}>
          <div className={styes.letter}>{letter}</div>
          <div className={styes.alternativeText}>{alternative.value}</div>
        </div>

        <div className={styes.verse}>
        </div>

      </div>

    </div>
  )
}