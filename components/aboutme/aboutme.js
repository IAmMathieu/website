import styles from "./aboutme.module.css"

export default function AboutMe() {
    return (
        <section id="aboutme" className={styles.aboutMeSection}>
            <article className={styles.aboutMe}>
                <p><span>Passionné</span> d&apos;IT hardware &amp; software, tester de nouvelles technologies &amp; outils est un hobby.</p>
                <p><span>Esprit logique</span> qui aime résoudre des <span>défis</span>, les jeux de Stratégie, Grand Stratégie et Gestion.</p>
                <p>Plutôt de <span>nature calme</span>, j&apos;appreçie également des moments de détente plongé dans un livre de SciFy ou Fantasy</p>
            </article>
        </section>
    )
}