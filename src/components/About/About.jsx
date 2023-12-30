import { MotionAnimate } from 'react-motion-animate';
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
        <MotionAnimate
          animation="scrollOpacity"
          ease={[0.17, 0.67, 0.97, -0.48]}
          scrollPositions={[0.2, 0.5, 0.6, 0.8]}
        >
          <SectionTitle>
            <Span>About Me.</Span>
          </SectionTitle>
        </MotionAnimate>
        <AboutPerfil>
          <MotionAnimate
            animation="scrollOpacity"
            ease={[0.17, 0.67, 0.97, -0.48]}
            scrollPositions={[0.2, 0.5, 0.6, 0.8]}
          >
            <AboutImage>
              <AboutImg src={my} alt="my2" />
              <AboutShodow></AboutShodow>
              <GeometricBox></GeometricBox>
              <AboutLine src={lines} alt="random-lines" />
              <AboutBox></AboutBox>
            </AboutImage>
          </MotionAnimate>
        </AboutPerfil>
        <MotionAnimate
          animation="scrollOpacity"
          ease={[0.17, 0.67, 0.97, -0.48]}
          scrollPositions={[0.2, 0.5, 0.6, 0.8]}
        >
          <AboutInfo>
            <AboutDesr>
              Passionate about creating <b>Web Pages</b> with
              <b>UI/UX User Interface</b>, I have 1 year of experience and many
              clients are happy with the projects carried out.
            </AboutDesr>
            <AboutList>
              <AboutItem>
                <b>My Skills Are:</b> HTML5, CSS3, JavaScript, TypeScript,
                React, Node Git & GitHub, Bootstrap, Figma.
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
        </MotionAnimate>
      </AboutContainer>
    </Section>
  );
};
