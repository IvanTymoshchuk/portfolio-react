import styled from '@emotion/styled';
import { grid, container } from '../utils/styles';

export const Footers = styled.footer`
  background-color: var(--container-color);
`;
export const FootersContainer = styled.div`
  ${container}
  ${grid}
  padding-block: 3rem 2rem;
  row-gap: 2.5rem;
`;
export const FootersLinks = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
`;
export const FootersList = styled.li``;

export const FootersLink = styled.a`
  color: hsl(0, 0%, 95%);
  transition: color 0.4s;
  &:hover {
    color: hsl(0, 0%, 64%);
  }
`;

export const FootersCopy = styled.span`
  font-size: 0.813rem;
  text-align: center;
`;
export const FootersCopyLink = styled.a`
  color: hsl(0, 0%, 95%);
  font-size: 500;
`;
