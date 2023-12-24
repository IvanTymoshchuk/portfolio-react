import React from 'react';
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
      <article class="projects__card">
        <div class="projects__image">
          <img src={img} alt="projects" class="projects__img" />
          <a href={projHubHref} class="projects__btn button">
            <TiArrowForward />
          </a>
        </div>
        <div class="projects__content">
          <h3 class="projects__sybtitle">{sybtitle}</h3>
          <h4 class="projects__title">{title}</h4>
          <p class="projects__decr">{descr}</p>
        </div>
        <div class="projects__buttons">
          <a
            href={gitHubHref}
            rel="noreferrer"
            target="_blank"
            class="projects__link"
          >
            <RiGithubFill />
            View
          </a>
        </div>
      </article>
    </div>
  );
};
