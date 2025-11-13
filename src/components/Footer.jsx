import styles from "./footer.module.css";
export default function Footer({ CompletedTodos, TotalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total To-Do's:{TotalTodos}</span>
      <span className={styles.item}>Completed To-Do's:{CompletedTodos}</span>
    </div>
  );
}
