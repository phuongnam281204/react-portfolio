import React, { useEffect, useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../i18n.jsx";

export const About = () => {
  const { t } = useLanguage();
  const aboutImages = [
    "about/dalat3.jpg",
    "about/dalat4.jpg",
    "about/dalat6jpg.jpg",
    "about/dalt2.jpg",
    "about/totnghiep1.jpg",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutImages.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [aboutImages.length]);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t.about.title}</h2>
      <div className={styles.content}>
        <div className={styles.slideshow} aria-label={t.about.galleryAria}>
          <img
            src={getImageUrl(aboutImages[activeIndex])}
            alt={`${t.about.photoAlt} ${activeIndex + 1}`}
            className={styles.slideImage}
          />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t.about.items[0].title}</h3>
              <p>{t.about.items[0].description}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t.about.items[1].title}</h3>
              <p>{t.about.items[1].description}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{t.about.items[2].title}</h3>
              <p>{t.about.items[2].description}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
