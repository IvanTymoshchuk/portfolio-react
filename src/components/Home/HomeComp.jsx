import React from 'react';
import {
  Section,
  HomeContainer,
  HomeName,
  HomePerfil,
  HomeImage,
  HomeImg,
  HomeShadow,
  HomeArrow,
  HomeLines,
  GeometricBox,
  HomeSocial,
  HomeSocialLink,
  HomeInfo,
  HomeDescr,
  HomeDescrB,
  HomeScroll,
  HomeScrollBox,
  HomeScrollText,
} from './HomeComp.styled';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import my from '../../img/my.jpg';
import arrow from '../../img/curved-arrow.svg';
import lines from '../../img/random-lines.svg';

export const HomeComp = () => {
  return (
    <Section id="home">
      <HomeContainer>
        <HomeName>Ivan Tymoshchuk</HomeName>
        <HomePerfil>
          <HomeImage>
            <HomeImg src={my} alt="my_fofo" />
            <HomeShadow></HomeShadow>
            <HomeArrow src={arrow} alt="arrow" />
            <HomeLines src={lines} alt="random-lines" />

            <GeometricBox></GeometricBox>
          </HomeImage>
          <HomeSocial>
            <HomeSocialLink
              href="https://www.linkedin.com/in/ivan-tymoshchukk/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </HomeSocialLink>
            <HomeSocialLink
              href="https://github.com/IvanTymoshchuk"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubFill />
            </HomeSocialLink>
          </HomeSocial>
        </HomePerfil>
        <HomeInfo>
          <HomeDescr>
            <HomeDescrB>Frontend developer</HomeDescrB>, with knowledge in web
            development and design, I offer the best projects resulting in
            quality work.
          </HomeDescr>
          <HomeScroll href="#about">
            <HomeScrollBox>
              <MdOutlineKeyboardDoubleArrowDown className="home__scroll-boxIcon" />
            </HomeScrollBox>
            <HomeScrollText> Scroll Down </HomeScrollText>
          </HomeScroll>
        </HomeInfo>
      </HomeContainer>
    </Section>
  );
};
