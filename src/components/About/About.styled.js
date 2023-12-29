import styled from '@emotion/styled';
import {
  section,
  grid,
  container,
  sectionTitle,
  geometricBox,
  button,
  buttonGhost,
  buttonAndGhost,
} from '../utils/styles';

export const Section = styled.section`
  ${section}
  background-color: var(--container-color);
`;

export const AboutContainer = styled.div`
  ${grid}
  ${container}
   row-gap: 0;
  @media screen and (min-width: 576px) {
    grid-template-columns: 350px;
    justify-content: center;
  }
`;

export const SectionTitle = styled.h2`
  ${sectionTitle}
  &::after {
    content: '';
    width: 40px;
    height: 28px;
    background-color: hsla(14, 98%, 50%, 0.2);
    position: absolute;
    top: -4px;
    right: -8px;
  }
`;
export const Span = styled.span`
  z-index: 5;
  position: relative;
`;

export const AboutPerfil = styled.div`
  position: relative;
  justify-self: center;
  margin-block: 2.5rem 4.5rem;
`;

export const AboutImage = styled.div`
  width: 220px;
`;

export const AboutImg = styled.img`
  position: relative;
  border: 4px solid hsl(0, 0%, 95%);
  z-index: 1;
`;

export const AboutShodow = styled.div`
  position: absolute;
  width: 150px;
  height: 385px;
  background-color: hsl(0, 0%, 8%);
  top: -2.5rem;
  right: -3.5rem;
  border-bottom: 4px solid hsl(14, 98%, 50%);
  transition: background-color 0.4s;
  @media screen and (max-width: 340px) {
    height: 330px;
    right: -2.5rem;
  }
`;

export const GeometricBox = styled.div`
  ${geometricBox}
  top: 1.5rem;
  right: -2.8rem;
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 3px solid hsl(0, 0%, 18%);
    left: -5px;
    top: -5px;
  }
`;

export const AboutLine = styled.img`
  position: absolute;
  filter: none;
  right: -1.25rem;
  top: 6rem;
  width: 50px;
  transition: filter 0.4s;
`;

export const AboutBox = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: hsl(14, 98%, 50%);
  right: -0.5rem;
  bottom: 1.5rem;
`;

export const AboutInfo = styled.div`
  padding-left: 1.25rem;
`;

export const AboutDesr = styled.p`
  position: relative;
  margin-bottom: 1.5rem;
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    background-color: var(--title-color);
    position: absolute;
    left: -1.75rem;
    top: 0.5rem;
  }
`;

export const AboutList = styled.ul`
  list-style: square;
  color: var(--title-color);
  margin-bottom: 3rem;
`;

export const AboutItem = styled.li``;

export const AboutButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;

export const Button = styled.a`
  ${button}
  ${buttonAndGhost}
  &:hover {
    background-color: hsl(14, 98%, 50%);
  }
`;

export const ButtonGhost = styled.a`
  ${buttonAndGhost}
  ${buttonGhost}
  :hover {
    background-color: hsl(14, 98%, 50%);
  }
  svg {
    color: var(--title-color);
  }
`;
