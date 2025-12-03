import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
             I’m learning frontend development and enjoy building responsive web pages using HTML, CSS, JavaScript and React. I have created simple and clean UI layouts and I’m continuously exploring new frontend tools and techniques.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I’m currently learning backend development with Node.js, Express, and API handling. I have practiced creating basic REST APIs and working with server-side logic as I improve my full stack skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA Learner</h3>
              <p>
               I am learning Data Structures and Algorithms by practicing problems on LeetCode and GeeksforGeeks. This helps me improve logic building, debugging, and writing efficient code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
