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
          <img 
            src={getImageUrl("contact/emailIcon.png")} 
            alt="Email icon" 
          />
          <a href="mailto:phuongnamtran2812@gmail.com">phuongnamtran2812@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/facebookIcon.png")}
            alt="Facebook icon"
          />
          <a href="https://www.facebook.com/namphuongtran2812">facebook.com/namphuongtran2812</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/phuongnam281204">github.com/phuongnam281204</a>
        </li>
      </ul>
    </footer>
  );
};