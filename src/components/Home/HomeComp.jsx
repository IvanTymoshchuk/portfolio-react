import React from 'react';
import {
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
    <HomeContainer class="home section" id="home">
      <div class="home__container container grid">
        <HomeName class="hone__name">Ivan Tymoshchuk</HomeName>
        <HomePerfil class="home__perfil">
          <HomeImage class="home__image">
            <HomeImg class="home__img" src={my} alt="my_fofo" />
            <HomeShadow class="home__shadow"></HomeShadow>
            <HomeArrow src={arrow} alt="arrow" class="home__arrow" />
            <HomeLines src={lines} alt="random-lines" class="home__line" />

            <GeometricBox class="geometric-box"></GeometricBox>
          </HomeImage>
          <HomeSocial class="home__social">
            <HomeSocialLink
              href="https://www.linkedin.com/in/ivan-tymoshchukk/"
              target="_blank"
              rel="noreferrer"
              class="home__social-link"
            >
              <FaLinkedin />
            </HomeSocialLink>
            <HomeSocialLink
              href="https://github.com/IvanTymoshchuk"
              target="_blank"
              rel="noreferrer"
              class="home__social-link"
            >
              <RiGithubFill />
            </HomeSocialLink>
          </HomeSocial>
        </HomePerfil>
        <HomeInfo class="home__info">
          <HomeDescr class="home_descr">
            <HomeDescrB>Frontend developer</HomeDescrB>, with knowledge in web
            development and design, I offer the best projects resulting in
            quality work.
          </HomeDescr>
          <HomeScroll href="#about" class="home__scroll">
            <HomeScrollBox class="home__scroll-box">
              <MdOutlineKeyboardDoubleArrowDown />
            </HomeScrollBox>
            <HomeScrollText class="home__scroll-text">
              {' '}
              Scroll Down{' '}
            </HomeScrollText>
          </HomeScroll>
        </HomeInfo>
      </div>
    </HomeContainer>
  );
};
