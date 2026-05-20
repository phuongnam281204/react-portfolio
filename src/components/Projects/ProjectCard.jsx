import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../i18n.jsx";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`${t.projects.imageAlt} ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          {t.projects.demo}
        </a>
        <a href={source} className={styles.link}>
          {t.projects.source}
        </a>
      </div>
    </div>
  );
};
