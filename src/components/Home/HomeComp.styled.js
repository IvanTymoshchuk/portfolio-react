import styled from '@emotion/styled';

export const HomeContainer = styled.section`
  padding-top: 2rem;
`;

export const HomeName = styled.h1`
  font-size: var(--biggest-font-size);
  text-align: center;
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
  filter: none;
  width: 50px;
  transition: filter 0.4s;
  left: 40%;
  bottom: -4rem;
`;

export const HomeLines = styled.img`
  position: absolute;
  filter: none;
  width: 50px;
  transition: filter 0.4s;
  right: -2rem;
  bottom: -0.5rem;
`;

export const GeometricBox = styled.div`
  top: 2.5rem;
  left: -0.7rem;
  z-index: 10;
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
  background-color: var(--black-color-light);
  color: var(--white-color);
  font-size: 1.25rem;
  padding: 6px;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--black-color);
  }
`;

export const HomeInfo = styled.div`
  margin-top: 4rem;
`;
export const HomeDescr = styled.p`
  text-align: center;
  color: var(--title-color);
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
  background-color: var(--black-color);
  color: var(--white-color);
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

// .home__scroll-box i {
//   animation: scroll-down 2s infinite;
// }

// /* Animate scroll icon */
// @keyframes scroll-down {
//   0% {
//     transform: translateY(-1rem);
//     opacity: 0;
//   }
//   50% {
//     transform: translateY(0);
//     opacity: 1;
//   }
//   100% {
//     transform: translateY(0.6rem);
//     opacity: 0;
//   }
// }
