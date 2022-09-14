import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <article className={styles.contact}>
                <h2>Me Contacter</h2>
                <form className={styles.contactForm} onSubmit="">
                    <label>
                        Nom:
                        <input type="text" id="lastname"/>
                    </label>
                    <label>
                        Email:
                        <input type="text" id="email"/>
                    </label>
                    <label>
                        Message:
                        <textarea id="message" rows="10"/>
                    </label>
                    <input type="submit" value="Envoyer"></input>
                </form>
            </article>
        </section>
    )
}

