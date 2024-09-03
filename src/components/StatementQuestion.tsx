import styles from "../styles/Statement.module.css";;

interface StatementProps {
  text: string
}

export default function StatementQuestion(props: StatementProps) {

  const { text } = props;

  return (
    <div className={styles.Statement}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}