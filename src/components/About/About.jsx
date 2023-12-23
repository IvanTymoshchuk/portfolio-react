import React from 'react';

export const About = () => {
  return (
    <section class="about section" id="about">
      <div class="about__container container grid">
        <h2 class="section__title-1">
          <span>About Me.</span>
        </h2>
        <div class="about__perfil">
          <div class="about__image">
            <img src="assets/img/my2.jpg" alt="image" class="about__img" />
            <div class="about__shadow"></div>
            <div class="geometric-box"></div>
            <img
              src="assets/img/random-lines.svg"
              alt="random-lines"
              class="about__line"
            />
            <div class="about__box"></div>
          </div>
        </div>
        <div class="about__info">
          <p class="about_descr">
            Passionate about creating <b>Web Pages</b> with
            <b>UI/UX User Interface</b>, I have 1 year of experience and many
            clients are happy with the projects carried out.
          </p>
          <ul class="about__list">
            <li class="about__item">
              <b>My Skills Are:</b> HTML5, CSS3, JavaScript, TypeScript, React,
              Node Git & GitHub, Bootstrap, Figma.
            </li>
          </ul>
          <div class="about__buttons">
            <a href="#contact" class="button">
              <i class="ri-send-plane-line"></i>
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-tymoshchukk/"
              class="button-ghost"
              target="_blank"
            >
              <i class="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
