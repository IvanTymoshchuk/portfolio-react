import React from 'react';
import {
  Section,
  AboutContainer,
  SectionTitle,
  AboutPerfil,
  AboutImage,
  AboutImg,
  AboutShodow,
  GeometricBox,
  AboutLine,
  AboutBox,
  AboutInfo,
  AboutDesr,
  AboutList,
  AboutItem,
  AboutButtons,
  Button,
  ButtonGhost,
} from './About.styled';
import { FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import my from '../../img/my2.jpg';
import lines from '../../img/random-lines.svg';

export const About = () => {
  return (
    <Section class="about section" id="about">
      <AboutContainer class="about__container container grid">
        <SectionTitle class="section__title-1">
          <span>About Me.</span>
        </SectionTitle>
        <AboutPerfil class="about__perfil">
          <AboutImage class="about__image">
            <AboutImg src={my} alt="my2" class="about__img" />
            <AboutShodow class="about__shadow"></AboutShodow>
            <GeometricBox class="geometric-box"></GeometricBox>
            <AboutLine src={lines} alt="random-lines" class="about__line" />
            <AboutBox class="about__box"></AboutBox>
          </AboutImage>
        </AboutPerfil>
        <AboutInfo class="about__info">
          <AboutDesr class="about_descr">
            Passionate about creating <b>Web Pages</b> with
            <b>UI/UX User Interface</b>, I have 1 year of experience and many
            clients are happy with the projects carried out.
          </AboutDesr>
          <AboutList class="about__list">
            <AboutItem class="about__item">
              <b>My Skills Are:</b> HTML5, CSS3, JavaScript, TypeScript, React,
              Node Git & GitHub, Bootstrap, Figma.
            </AboutItem>
          </AboutList>
          <AboutButtons class="about__buttons">
            <Button href="#contact" class="button">
              <FaLocationArrow />
              Contact Me
            </Button>
            <ButtonGhost
              href="https://www.linkedin.com/in/ivan-tymoshchukk/"
              class="button-ghost"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </ButtonGhost>
          </AboutButtons>
        </AboutInfo>
      </AboutContainer>
    </Section>
  );
};
