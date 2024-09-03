import AlternativeModel from "@/model/AlternativeModel";
import styes from "../styles/Alternative.module.css";;

interface AlternativeProps {
  alternative: AlternativeModel,
  index: number,
  letter: string,
  letterBackGroundColor: string,
  chosenAlternative: (index: number) => void
}

export default function Alternative(props: AlternativeProps) {
  const { alternative, index, letter, letterBackGroundColor } = props;

  return (
    <div className={styes.alternative} onClick={() => props.chosenAlternative(index)}>

      <div className={styes.alternativeContent}>

        <div className={styes.front}>
          <div className={styes.letter} style={{backgroundColor: letterBackGroundColor}}>{letter}</div>
          <div className={styes.alternativeText}>{alternative.value}</div>
        </div>

        <div className={styes.verse}>
        </div>

      </div>

    </div>
  )
}