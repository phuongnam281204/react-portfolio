import React from "react";

import styles from "./Projects.module.css";

import { getProjects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../i18n.jsx";

export const Projects = () => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t.projects.title}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
