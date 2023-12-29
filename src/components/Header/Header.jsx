import { useState, useContext } from 'react';

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
  NavItems,
  NavLink,
  NavMenu,
  NavTogle,
  NavBtn,
} from './Header.styled';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { RiMoonClearLine } from 'react-icons/ri';
import { ThemeContext } from 'components/utils/theme';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Headers id="header">
      <Nav>
        <NavLogo href="#">
          <NavLogoCircle>IT</NavLogoCircle>
          <NavLogoName>Ivan Tymoshchuk</NavLogoName>
        </NavLogo>

        <NavMenu className={isMenuOpen ? 'show' : ''}>
          <NavTitle>Menu</NavTitle>
          <NavName>Ivan</NavName>
          <NavList>
            <NavItems>
              <NavLink href="#home">Home</NavLink>
            </NavItems>

            <NavItems>
              <NavLink href="#about">About Me</NavLink>
            </NavItems>

            <NavItems>
              <NavLink href="#projects">Projects</NavLink>
            </NavItems>

            <NavItems>
              <NavLink href="#contact">Contact Me</NavLink>
            </NavItems>
          </NavList>

          <NavClose onClick={toggleMenu}>
            <IoEyeOffOutline />
          </NavClose>
        </NavMenu>
        <NavBtn>
          <NavTogle>
            <RiMoonClearLine onClick={() => toggleTheme()} />
          </NavTogle>

          <NavTogle onClick={toggleMenu}>
            <IoEyeOutline />
          </NavTogle>
        </NavBtn>
      </Nav>
    </Headers>
  );
};
