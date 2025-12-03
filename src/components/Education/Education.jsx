import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>EDUCATION</h2>

      <div className={styles.card}>
        <h3 className={styles.degree}>
          B.Tech in Artificial Intelligence & Data Science
        </h3>

        <p className={styles.college}>
          2023 – 2027
        </p>

        <p className={styles.description}>
         <b> Coursework:</b> Data Structures & Algorithms,Computer Networks, OS, Machine Learning,DBMS
        </p>
      </div>
    </section>
  );
};
