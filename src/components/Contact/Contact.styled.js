import styled from '@emotion/styled';
import {
  section,
  grid,
  sectionTitle,
  button,
  geometricBox,
} from '../utils/styles';

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
`;

export const Span = styled.span`
  z-index: 5;
  position: relative;
`;

export const ContactDescr = styled.p`
  color: hsl(0, 0%, 95%);
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ContactDescrSec = styled.p`
  color: hsl(0, 0%, 95%);
  font-size: 0.813rem;
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

export const ContactMail = styled.div`
  position: relative;
  background-color: hsl(0, 0%, 12%);
  padding: 5rem 1.5rem 2.5rem;
  margin-top: -2.5rem;
  transition: background-color 0.4s;
`;

export const ContactTitleSec = styled.h2`
  color: hsl(0, 0%, 95%);
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ContactForm = styled.form`
  position: relative;
  display: grid;
  row-gap: 1.25rem;
`;

export const ContactGroup = styled.div`
  display: grid;
  row-gap: 1.25rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

export const ContactBox = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
`;

export const ContactInput = styled.input`
  font-family: 'Bai Jamjuree', sans-serif;
  font-size: 0.938rem;
  outline: none;
  border: none;
  position: absolute;
  width: 100%;
  height: 100%;
  color: hsl(0, 0%, 95%);
  background-color: hsl(0, 0%, 18%);
  border: 3px solid hsl(0, 0%, 30%);
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: border 0.4s, background-color 0.4s;
  &::placeholder {
    color: hsl(0, 0%, 64%);
    transition: opacity 0.4s;
  }
  &:focus {
    border: 3px solid hsl(0, 0%, 95%);
  }
  &:-webkit-autofill {
    transition: background-color 6000s, color 6000s;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

export const ContactLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  color: hsl(0, 0%, 64%);
  font-size: 0.813rem;
  font-weight: 500;
  background-color: hsl(0, 0%, 18%);
  padding: 8px;
  pointer-events: none;
  transition: top 0.4s, opacity 0.4s, background-color 0.4s;
  opacity: 0;
  &:focus {
    opacity: 1;
    top: -16px;
  }
`;

export const ContactArea = styled.div`
  height: 10rem;
  position: relative;
  width: 100%;
`;

export const ContactMessage = styled.p`
  color: hsl(0, 0%, 95%);
  font-size: 0.813rem;
  position: absolute;
  bottom: -1.6rem;
  left: 0;
`;

export const ContactBtn = styled.button`
  ${button}
  font-family: 'Bai Jamjuree', sans-serif;
  font-size: 0.938rem;
  outline: none;
  border: none;
  background-color: hsl(14, 98%, 50%);
  cursor: pointer;
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
  color: hsl(0, 0%, 64%);
  font-size: 0.813rem;
  margin-bottom: 0.5rem;
`;

export const ContactSocialDescr2 = styled.p`
  color: hsl(0, 0%, 95%);
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
  color: hsl(0, 0%, 95%);
  place-items: center;
  font-size: 1.25rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: hsl(14, 98%, 50%);
  }
`;
