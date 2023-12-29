import styled from '@emotion/styled';
import { section, grid, container, geometricBox } from '../utils/styles';

export const Section = styled.section`
  ${section}
  background-color: var(--body-color);
  transition: box-shadow 0.4s, background-color 0.4s;
`;
export const HomeContainer = styled.div`
  ${container}
  ${grid}
  padding-top: 2rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: 350px;
    justify-content: center;
  }
`;

export const HomeName = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  transition: box-shadow 0.4s, background-color 0.4s;
`;
export const HomePerfil = styled.div`
  position: relative;
  justify-self: center;
`;
export const HomeImage = styled.div`
  width: 220px;
`;

export const HomeImg = styled.img`
  position: relative;
  z-index: 10;
`;
export const HomeShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--container-color);
  position: absolute;
  bottom: -0.75rem;
  right: -0.75rem;
  border: 4px solid var(--black-color);
  z-index: 5;
  transition: background-color 0.4s;
`;
export const HomeArrow = styled.img`
  position: absolute;
  width: 50px;
  transition: filter 0.4s;
  left: 40%;
  bottom: -4rem;
  filter: var(--filter);
`;

export const HomeLines = styled.img`
  position: absolute;
  filter: var(--filter);
  width: 50px;
  transition: filter 0.4s;
  right: -2rem;
  bottom: -0.5rem;
`;

export const GeometricBox = styled.div`
  ${geometricBox}
  top: 2.5rem;
  left: -0.7rem;
  z-index: 10;
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
export const HomeSocial = styled.div`
  position: absolute;
  height: max-content;
  left: -3rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: grid;
  row-gap: 1rem;
`;
export const HomeSocialLink = styled.a`
  background-color: hsl(0, 0%, 30%);
  color: hsl(0, 0%, 95%);
  font-size: 1.25rem;
  padding: 6px;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: hsl(0, 0%, 18%);
  }
`;

export const HomeInfo = styled.div`
  margin-top: 4rem;
`;
export const HomeDescr = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
`;
export const HomeDescrB = styled.b`
  background: linear-gradient(
    90deg,
    hsla(14, 98%, 50%, 0.3),
    hsla(14, 98%, 50%, 0)
  );
`;

export const HomeScroll = styled.a`
  display: block;
  width: max-content;
  margin: 0 auto;
`;

export const HomeScrollBox = styled.div`
  background-color: hsl(0, 0%, 18%);
  color: hsl(0, 0%, 95%);
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.4s;
`;

export const HomeScrollText = styled.span`
  display: none;
`;
