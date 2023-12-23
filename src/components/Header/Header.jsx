import React from 'react';
import {
  Headers,
  Nav,
  NavLogo,
  NavLogoCircle,
  NavLogoName,
  NavTitle,
  NavName,
  NavClose,
  NavList,
  NavLink,
  NavMenu,
} from './Header.styled';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { RiMoonClearLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <Headers class="header" id="header">
      <Nav class="nav container">
        <NavLogo href="#" class="nav__logo">
          <NavLogoCircle class="nav__logo--circle">IT</NavLogoCircle>
          <NavLogoName class="nav__logo--name">Ivan Tymoshchuk</NavLogoName>
        </NavLogo>

        <NavMenu class="nav__menu" id="nav-menu">
          <NavTitle class="nav__title">Menu</NavTitle>
          <NavName class="nav__name">Ivan</NavName>
          <NavList class="nav__list">
            <li class="nav__item">
              <NavLink href="#home" class="nav__link">
                Home
              </NavLink>
            </li>

            <li class="nav__item">
              <NavLink href="#about" class="nav__link">
                About Me
              </NavLink>
            </li>

            <li class="nav__item">
              <NavLink href="#projects" class="nav__link">
                Projects
              </NavLink>
            </li>

            <li class="nav__item">
              <NavLink href="#contact" class="nav__link">
                Contact Me
              </NavLink>
            </li>
          </NavList>

          <NavClose class="nav__close" id="nav-close">
            <IoEyeOffOutline />
          </NavClose>
        </NavMenu>
        <div class="nav__buttons">
          <RiMoonClearLine
            class="ri-moon-clear-line change-theme"
            id="theme-btn"
          />
          <div class="nav__toggle" id="nav-toggle">
            <IoEyeOutline />
          </div>
        </div>
      </Nav>
    </Headers>
  );
};