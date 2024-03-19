import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Quad Trick Exchange</h1>
        <p>(A working title!)</p>
      </div>

      <p>
        &copy;{' '}
        <a href="https://sparkbird.works" target="_blank">
          Sparkbird Works LLC
        </a>
        , 2024
      </p>
    </main>
  );
}
