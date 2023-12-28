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
    <Section id="projects">
      <SectionTitle >
        <Span>Projects.</Span>
      </SectionTitle>
      <ProjectsContainer >
        {projects.map((project, i) => {
          return <ProjectsItems key={i} {...project} />;
        })}
      </ProjectsContainer>
    </Section>
  );
};
