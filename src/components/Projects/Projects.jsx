import React from 'react';
import { projects } from './data';
import { ProjectsItems } from './ProjectsItems/ProjectsItems';

export const Projects = () => {
  return (
    <section class="projects section" id="projects">
      <h2 class="section__title-1">
        <span>Projects.</span>
      </h2>
      <div class="projects__container container grid">
        {projects.map((project, i) => {
          return <ProjectsItems key={i} {...project} />;
        })}
      </div>
    </section>
  );
};
