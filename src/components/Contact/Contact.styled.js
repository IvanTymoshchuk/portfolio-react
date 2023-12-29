import styled from '@emotion/styled';
import { section, grid, sectionTitle, geometricBox } from '../utils/styles';

export const Section = styled.section`
  ${section}
  padding-bottom: 0;
`;
export const ContactContainer = styled.div`
  ${grid}
  position: relative;
  grid-template-rows: 300px max-content max-content;
  row-gap: 0;
  @media screen and (min-width: 576px) {
    grid-template-columns: 500px;
    justify-content: center;
  }
`;

export const ContactData = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: hsl(0, 0%, 12%);
  padding: 3rem 1.5rem 3.5rem;
  margin-left: auto;
  border-bottom: 4px solid hsl(14, 98%, 50%);
  z-index: 5;
  transition: background-color 0.4s;
  @media screen and (min-width: 576px) {
    width: 350px;
    padding: 4rem 1.5rem;
    margin-inline: auto;
  }
`;

export const ContactTitle = styled.h2`
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

export const GeometricBox = styled.div`
  ${geometricBox}
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

export const ContactDescr = styled.p`
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ContactDescrSec = styled.p`
  font-size: 0.813rem;
`;

export const ContactMail = styled.div`
  position: relative;
  background-color: hsl(0, 0%, 12%);
  padding: 5rem 1.5rem 2.5rem;
  margin-top: -2.5rem;
  transition: background-color 0.4s;
`;

export const ContactTitleSec = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ContactSocial = styled.div`
  display: grid;
  row-gap: 1rem;
  padding-block: 1rem 2rem;
  text-align: center;
`;

export const ContactSocialArrow = styled.img`
  width: 32px;
  margin: 0 auto;
`;

export const ContactSocialData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const ContactSocialDescr = styled.p`
  font-size: 0.813rem;
  margin-bottom: 0.5rem;
`;

export const ContactSocialDescr2 = styled.p`
  font-size: 0.813rem;
  font-weight: 600;
`;

export const ContactSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 0.75rem;
`;

export const ContactSocialLink = styled.a`
  background-color: hsl(0, 0%, 30%);
  padding: 6px;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: hsl(14, 98%, 50%);
  }
`;
