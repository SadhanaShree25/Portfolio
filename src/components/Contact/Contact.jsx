import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        
        <li className={styles.link}>
          <a 
            href="mailto:iamsadhanashree@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
            Gmail
          </a>
        </li>

        <li className={styles.link}>
          <a 
            href="https://www.linkedin.com/in/SadhanaShree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
            Linkedin
          </a>
        </li>

        <li className={styles.link}>
          <a 
            href="https://github.com/SadhanaShre25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/github.png")} alt="Github icon" />
            Github
          </a>
        </li>

      </ul>
    </footer>
  );
};
