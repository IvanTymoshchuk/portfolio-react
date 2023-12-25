import React from 'react';
import { projects } from './data';
import {
  Section,
  SectionTitle,
  Span,
  ProjectsContainer,
} from './Projetcs.styled';
import { ProjectsItems } from './ProjectsItems/ProjectsItems';

export const Projects = () => {
  return (
    <Section class="projects section" id="projects">
      <SectionTitle class="section__title-1">
        <Span>Projects.</Span>
      </SectionTitle>
      <ProjectsContainer class="projects__container container grid">
        {projects.map((project, i) => {
          return <ProjectsItems key={i} {...project} />;
        })}
      </ProjectsContainer>
    </Section>
  );
};
