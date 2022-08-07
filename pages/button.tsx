import styles from "../styles/index.module.css";

export default function Home(): JSX.Element {
  let i = 1;
  let il = 1;
  // const button = console.log("teste");

  return (
    console.log(i + il),
    (
      <div className={styles.text}>
        <h1>Hello</h1>
        <button className={styles.btn} onClick={() => button}>
          Clique
        </button>
      </div>
    )
  );
  function button() {
    console.log("Hello World");
  }
}
