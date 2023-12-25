import styled from '@emotion/styled';
import { section, grid, container, sectionTitle } from '../utils/styles';

export const Section = styled.section`
  background-color: hsl(0, 0%, 12%);
  transition: background-color 0.4s;
  ${section}
`;
export const SectionTitle = styled.h2`
  ${sectionTitle}
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
    grid-template-columns: repeat(3, 350px);
  }
`;
