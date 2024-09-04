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
        colors={["#aeff83", "#ffdf70", "#ff8383", "#ff6060"]}
        colorsTime={[props.duration, props.duration*0.5, props.duration*0.25, 0]}
        isSmoothColorTransition={true}>

        {({ remainingTime }) => remainingTime}

      </CountdownCircleTimer>
    </div>
  )
}