import Head from "next/head";
import ProjectsList from "../components/projectsList/projectsList";
import styles from "../styles/Home.module.css";
import Intro from "../components/intro/intro";
import Socials from "../components/socials/socials";
import Mailto from "../components/mailto/mailto";
import AboutMe from "../components/aboutme/aboutme";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Mathieu Tourte</title>
          <meta
            name="Portfolios"
            content="Crée par Mathieu Tourte avec NextJs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id="main" className={styles.scroller}>
          <Socials />
          <Mailto />
          <Intro />
          <AboutMe />
          <ProjectsList />
        </div>
      </div>
    </>
  );
}
