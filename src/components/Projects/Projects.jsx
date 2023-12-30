import { MotionAnimate } from 'react-motion-animate';
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
      <MotionAnimate animation="scrollOpacity" ease={[0.17, 0.67, 0.97, -0.48]}>
        <SectionTitle>
          <Span>Projects.</Span>
        </SectionTitle>
      </MotionAnimate>
      <ProjectsContainer>
        {projects.map((project, i) => {
          return <ProjectsItems key={i} {...project} />;
        })}
      </ProjectsContainer>
    </Section>
  );
};
