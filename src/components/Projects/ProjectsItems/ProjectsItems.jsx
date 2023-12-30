import { MotionAnimate } from 'react-motion-animate';
import {
  ProjectsCard,
  ProjectsImage,
  ProjectsImg,
  ProjectsBtn,
  ProjectsContent,
  ProjectsSubtitle,
  ProjectsTitle,
  ProjectsDescr,
  ProjectsButtons,
  ProjectsLink,
} from './ProjectsItems.styled';
import { RiGithubFill } from 'react-icons/ri';
import { TiArrowForward } from 'react-icons/ti';

export const ProjectsItems = ({
  img,
  sybtitle,
  title,
  descr,
  gitHubHref,
  projHubHref,
}) => {
  return (
    <div>
      <MotionAnimate
        animation="scrollOpacity"
        ease={[0.17, 0.67, 0.97, -0.48]}
        scrollPositions={[0.2, 0.5, 0.6, 0.8]}
      >
        
        <ProjectsCard>
          <ProjectsImage>
            <ProjectsImg src={img} alt="projects" />
            <ProjectsBtn href={projHubHref} rel="noreferrer" target="_blank">
              <TiArrowForward />
            </ProjectsBtn>
          </ProjectsImage>
          <ProjectsContent>
            <ProjectsSubtitle>{sybtitle}</ProjectsSubtitle>
            <ProjectsTitle>{title}</ProjectsTitle>
            <ProjectsDescr>{descr}</ProjectsDescr>
          </ProjectsContent>
          <ProjectsButtons>
            <ProjectsLink href={gitHubHref} rel="noreferrer" target="_blank">
              <RiGithubFill />
              View
            </ProjectsLink>
          </ProjectsButtons>
        </ProjectsCard>
      </MotionAnimate>
    </div>
  );
};
