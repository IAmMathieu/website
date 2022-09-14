import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ repo }) {
  return (
    <div className={styles.cardContainer}>
      <Link href={repo.html_url}>
        <a>
          <Image
            className={styles.cardImage}
            src="https://picsum.photos/300/150"
            alt="Github Project Image"
            width={300}
            height={150}
          />
          <article className={styles.cardArticle}>
            <h2 className={styles.cardArticleTitle}>{repo.name}</h2>
            <p className={styles.cardArticleDescription}>{repo.description}</p>
          </article>
        </a>
      </Link>
    </div>
  );
}
