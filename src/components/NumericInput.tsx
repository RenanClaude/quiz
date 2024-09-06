import styles from "../styles/NumericInput.module.css";;

interface NumericInputProps {
  text: string,
  valueToShow: any,
  value: number
  onChange: (newNumber: number) => void
}

export default function NumericImput(props: NumericInputProps) {

  const decrement = () => props.value === 1 ? null : props.onChange(props.value - 1);
  const increment = () => props.onChange(props.value + 1);


  return (
    <div className={styles.numericImput}>
      <span className={styles.text}>{props.text}</span>

      <div className={styles.buttonsAndQuantity}>
        <button className={styles.btn} onClick={decrement}>-</button>
        <span className={styles.value}>{props.valueToShow}</span>
        <button className={styles.btn} onClick={increment}>+</button>
      </div>
    </div>
  )
}