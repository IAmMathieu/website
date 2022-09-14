import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState, useCallback } from "react";

export default function Navbar() {
  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      const { pageYOffset, scrollY } = window;
      console.log('yOffset', pageYOffset, 'scrollY', scrollY)
    };
    document.getElementById('main').addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.getElementById('main').removeEventListener("scroll", scroll, options);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ol className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#home">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#aboutme">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#projects">Mes projets</Link>
        </li>
        {/* <li className={styles.navItem}>
          <Link href="#contact">Contact</Link>
        </li> */}
      </ol>
      {/* <Link href="#cv">
        <a className={styles.moncv}>CV</a>
      </Link> */}
    </nav>
  );
}
