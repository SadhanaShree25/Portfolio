import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sadhana Shree</h1>
        <p className={styles.description}>
          Aspiring Full Stack Developer exploring the world of AI. I love <br>
          </br> building smart, modern web applications that connect creativity with technology.
        </p>

        {/* 🔥 Contact + Social Buttons */}
        <div className={styles.buttons}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>

          <a
            href="https://github.com/SadhanaShree25"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/SadhanaShree"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Developer working on a Laptop"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
