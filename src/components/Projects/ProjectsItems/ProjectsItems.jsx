import React from 'react';
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
      <ProjectsCard class="projects__card">
        <ProjectsImage class="projects__image">
          <ProjectsImg src={img} alt="projects" class="projects__img" />
          <ProjectsBtn href={projHubHref} class="projects__btn button">
            <TiArrowForward />
          </ProjectsBtn>
        </ProjectsImage>
        <ProjectsContent class="projects__content">
          <ProjectsSubtitle class="projects__sybtitle">
            {sybtitle}
          </ProjectsSubtitle>
          <ProjectsTitle class="projects__title">{title}</ProjectsTitle>
          <ProjectsDescr class="projects__decr">{descr}</ProjectsDescr>
        </ProjectsContent>
        <ProjectsButtons class="projects__buttons">
          <ProjectsLink
            href={gitHubHref}
            rel="noreferrer"
            target="_blank"
            class="projects__link"
          >
            <RiGithubFill />
            View
          </ProjectsLink>
        </ProjectsButtons>
      </ProjectsCard>
    </div>
  );
};
