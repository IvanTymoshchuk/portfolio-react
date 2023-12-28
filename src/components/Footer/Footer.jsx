import {
  Footers,
  FootersContainer,
  FootersLinks,
  FootersLink,
  FootersCopy,
  FootersCopyLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Footers>
      <FootersContainer>
        <FootersLinks>
          <li>
            <FootersLink href="#about">About</FootersLink>
          </li>
          <li>
            <FootersLink href="#services">Services</FootersLink>
          </li>
          <li>
            <FootersLink href="#projects">Projects</FootersLink>
          </li>
        </FootersLinks>
        <FootersCopy>
          &#169; All Rights Reserved By{' '}
          <FootersCopyLink href="#">Timacode.</FootersCopyLink>
        </FootersCopy>
      </FootersContainer>
    </Footers>
  );
};
