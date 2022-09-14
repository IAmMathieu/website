import useSWR from "swr";
import Card from "../card/card";
import styles from "./cardHolder.module.css";

export default function CardHolder() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.github.com/users/MathTou/repos",

    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <section id="projects" className={styles.cardSection}>
      <div className={styles.cardHolder}>
        {data.map((repoData) => (
          <Card key={repoData.id} repo={repoData} />
        ))}
      </div>
    </section>
  );
}
