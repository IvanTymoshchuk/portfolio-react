import styled from '@emotion/styled';
import { section, grid, container, sectionTitle } from '../utils/styles';

export const Section = styled.section`
  ${section}
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

export const ServicesContainer = styled.div`
  ${container}
  ${grid}
  grid-template-columns: 250px;
  justify-content: center;
  row-gap: 2rem;
  padding-top: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 250px);
  }
`;

export const ServicesCard = styled.article`
  position: relative;
`;

export const ServicesBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid var(--orange);
  top: 0;
  left: 0;
  transition: transform 0.4s;
`;

export const ServicesContent = styled.div`
  height: 100%;
  background-color: var(--body-color);
  border: 4px solid var(--black-color);
  padding: 6rem 1rem 3rem;
  z-index: 5;
  position: relative;
  transition: background-color 0.4s, border 4s;
  &:hover {
    transform: translate(0.75rem, 0.75rem);
  }
`;

export const ServicesIcon = styled.div`
  position: relative;
  display: inline-flex;
`;

export const ServicesBox = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: var(--orange);
  right: -2px;
  top: -2px;
`;

export const ServicesTitleSec = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const ServicesDesr = styled.p``;
