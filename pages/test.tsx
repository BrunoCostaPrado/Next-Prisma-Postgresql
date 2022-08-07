import styles from "../styles/index.module.css";

export default function Home(): JSX.Element {
  let i = 1;
  let il = 1;
  const button = console.log(i + il);
  return (
    <div className={styles.main}>
      <h1>Hello</h1>
      <p className={styles.para}>Teste</p>
    </div>
  );
}
