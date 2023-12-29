import styled from '@emotion/styled';
import { section, grid, container, sectionTitle } from '../utils/styles';

export const Section = styled.section`
  background-color: var(--container-color);
  transition: background-color 0.4s;
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

export const ProjectsContainer = styled.div`
  ${container}
  ${grid}
  row-gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3, 350px);
  }
`;
