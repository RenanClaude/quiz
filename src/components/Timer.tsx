import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../styles/Timer.module.css"

interface TimerProps {
  duration: number,
  timeOut: () => void
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors={["#aeff83", "#ffdf70", "#ff8383", "#ff7070"]}
        colorsTime={[30, 15, 7, 0]}
        isSmoothColorTransition={true}>

        {({ remainingTime }) => remainingTime}

      </CountdownCircleTimer>
    </div>
  )
}