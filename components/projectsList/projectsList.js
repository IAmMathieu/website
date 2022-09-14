import useSWR from "swr";
import Link from "next/link";
import styles from "./projectsList.module.css";

export default function ProjectsList(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.github.com/users/IAmMathieu/repos",

    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>Mes Projets</h1>
      <ul>
        {data.map((repo) => (
          <li key={repo.id}>
            <Link href={repo.html_url}>
              <a>
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
