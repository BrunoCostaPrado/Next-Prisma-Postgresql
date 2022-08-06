// import { styles } from "../styles/index.module.css";

import styles from "../styles/index.module.css";

export default function Home(): JSX.Element {
  let i = 1;
  let il = 1;
  return (
    console.log(i + il),
    (
      <div className={styles.main}>
        <h1>Hello</h1>
      </div>
    )
  );
}
