import styles from "./Display.module.css";

function Display({ DVal }) {
  return (
    <input className={styles.display} value={DVal} type="Text" readOnly></input>
  );
}

export default Display;
