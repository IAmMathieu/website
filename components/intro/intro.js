import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section id="home" className={styles.introSection}>
      <article className={styles.intro}>
        <h1>Hello,</h1>
        <h1>
          je suis <span>M</span>athieu
        </h1>
        <h1>
          Développeur <span>web</span> &amp; <span>mobile</span>
        </h1>
      </article>
    </section>
  );
}
