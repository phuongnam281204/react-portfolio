import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../use-language";

export const Hero = () => {
  const { t } = useLanguage();
  const cvUrl = getImageUrl("CV_TranPhuongNam_Frontend_Developer.pdf");
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.description}>{t.hero.description}</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.contactBtn}>
            {t.hero.contactBtn}
          </a>
          <a
            href={cvUrl}
            className={styles.contactBtn}
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.cvBtn}
          </a>
        </div>
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
