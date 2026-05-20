import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../i18n.jsx";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.description}>{t.hero.description}</p>
        <a href="#contact" className={styles.contactBtn}>
          {t.hero.contactBtn}
        </a>
      </div>
      <img
        src={getImageUrl("hero/anh_chan_dung.jpg")}
        alt={t.hero.imageAlt}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
