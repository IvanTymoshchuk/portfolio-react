import styled from '@emotion/styled';
import { button } from '../../utils/styles';

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
