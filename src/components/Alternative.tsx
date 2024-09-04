import AlternativeModel from "@/model/AlternativeModel";
import styes from "../styles/Alternative.module.css";

;

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
        {!alternative.revealed ? (
          <div className={styes.front}>
            <div className={styes.letter} style={{ backgroundColor: letterBackGroundColor }}>{letter}</div>
            <div className={styes.alternativeText}>{alternative.value}</div>
          </div>
        ) : (
          <div className={styes.verse}>
            {alternative.correct ?
              (<div className={styes.correct}>
                <div>A resposta certa é...</div>
                <div className={styes.alternativeText}>{alternative.value}</div>
              </div>) :
              (<div className={styes.incorrect}>
                <div>A resposta informada está errada...</div>
                <div className={styes.alternativeText}>{alternative.value}</div>
              </div>)
            }
          </div>
        )}
      </div>

    </div>
  )
}