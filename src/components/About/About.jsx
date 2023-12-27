import React from 'react';
import {
  Section,
  AboutContainer,
  SectionTitle,
  Span,
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
    <Section id="about">
      <AboutContainer>
        <SectionTitle>
          <Span>About Me.</Span>
        </SectionTitle>
        <AboutPerfil>
          <AboutImage>
            <AboutImg src={my} alt="my2" />
            <AboutShodow></AboutShodow>
            <GeometricBox></GeometricBox>
            <AboutLine src={lines} alt="random-lines" />
            <AboutBox></AboutBox>
          </AboutImage>
        </AboutPerfil>
        <AboutInfo>
          <AboutDesr>
            Passionate about creating <b>Web Pages</b> with
            <b>UI/UX User Interface</b>, I have 1 year of experience and many
            clients are happy with the projects carried out.
          </AboutDesr>
          <AboutList>
            <AboutItem>
              <b>My Skills Are:</b> HTML5, CSS3, JavaScript, TypeScript, React,
              Node Git & GitHub, Bootstrap, Figma.
            </AboutItem>
          </AboutList>
          <AboutButtons>
            <Button href="#contact">
              <FaLocationArrow />
              Contact Me
            </Button>
            <ButtonGhost
              href="https://www.linkedin.com/in/ivan-tymoshchukk/"
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
