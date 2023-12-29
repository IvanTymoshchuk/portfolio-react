import styled from '@emotion/styled';
import { button } from 'components/utils/styles';

export const ProjectsCard = styled.div`
  padding: 1rem 1rem 2rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: var(--body-color);
  }
`;
export const ProjectsImage = styled.div`
  position: relative;
  margin-bottom: 0.75rem;
`;
export const ProjectsImg = styled.img``;
export const ProjectsBtn = styled.a`
  ${button}
  position: absolute;
  right: 1rem;
  bottom: -1.5rem;
  padding: 1rem;
  &:hover {
    background-color: var(--orange);
  }
`;
export const ProjectsContent = styled.div`
  margin-bottom: 1.25rem;
`;
export const ProjectsSubtitle = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 0.813rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  padding-left: 1.75rem;
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    background-color: hsl(0, 0%, 70%);
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
export const ProjectsTitle = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
`;
export const ProjectsDescr = styled.p``;

export const ProjectsButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
export const ProjectsLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  color: var(--title-color);
  font-size: 0.813rem;
  font-weight: 500;
  transition: color 0.4s;
  &:hover {
    color: var(--orange);
  }
`;
