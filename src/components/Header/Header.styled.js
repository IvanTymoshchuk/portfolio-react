import styled from '@emotion/styled';
import { container } from '../utils/styles';

export const Headers = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: hsl(0, 0%, 8%);
  z-index: 100;
  transition: box-shadow 0.4s, background-color 0.4s;
`;

export const Nav = styled.nav`
  ${container}
  position: relative;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1150px) {
    height: calc(3.5rem + 2rem);
    column-gap: 4rem;
  }
`;

export const NavLogo = styled.a`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  color: hsl(0, 0%, 95%);
`;
export const NavTogle = styled.div`
  width: 32px;
  height: 32px;
  background-color: hsl(0, 0%, 18%);
  color: hsl(0, 0%, 95%);
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  @media screen and (min-width: 1150px) {
    display: none;
  }
`;

export const NavLogoCircle = styled.span`
  width: 32px;
  height: 32px;
  background-color: hsl(0, 0%, 18%);
  color: hsl(0, 0%, 95%);
  display: grid;
  place-items: center;
  border-radius: 50%;
`;

export const NavTitle = styled.span`
  color: hsl(0, 0%, 95%);
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  @media screen and (min-width: 1150px) {
    display: none;
  }
`;

export const NavName = styled.h3`
  @media screen and (min-width: 1150px) {
    display: none;
  }
  color: hsl(0, 0%, 95%);
  position: relative;
  width: max-content;
  margin: 0 auto 3rem;
  font-size: 1.25rem;
  &::after,
  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background-color: hsl(0, 0%, 70%);
    position: absolute;
    top: 50%;
    left: -4rem;
  }
  &::before {
    left: initial;
    right: -4rem;
  }
`;

export const NavClose = styled.div`
  @media screen and (min-width: 1150px) {
    display: none;
  }
  color: hsl(0, 0%, 95%);
  position: absolute;
  font-size: 1.5rem;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
`;
export const NavLogoName = styled.span``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  @media screen and (min-width: 1150px) {
    flex-direction: row;
    column-gap: 4rem;
  }
`;
export const NavLink = styled.a`
  position: relative;
  color: hsl(0, 0%, 64%);
  font-size: 1.125rem;
  font-weight: 600;
  transition: color 0.3s;
  &:hover {
    color: hsl(0, 0%, 95%);
  }
  &:hover::after {
    width: 100%;
  }
  &::after {
    content: '';
    width: 0%;
    height: 2%;
    background-color: hsl(0, 0%, 95%);
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    transition: width 0.3s;
  }
`;

/* Navigation for mobile devices */
export const NavMenu = styled.ul`
  @media screen and (min-width: 1150px) {
    margin-left: auto;
  }

  @media screen and (max-width: 1150px) {
    padding-block: 1.8rem 5rem;
    position: fixed;
    top: -100%;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.75);
    width: 100%;
    text-align: center;
    backdrop-filter: blur(8px);
    transition: top 0.4s;
  }
`;
// /* Show menu */
// .show-menu {
//   top: 0;
// }

// /* Add shadow header */

// .shadow-header {
//   box-shadow: 0 1px 16px hsla(0, 0%, 0%, 0.12);
// }
