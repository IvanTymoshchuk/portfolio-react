import {
  Footers,
  FootersContainer,
  FootersLinks,
  FootersList,
  FootersLink,
  FootersCopy,
  FootersCopyLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Footers>
      <FootersContainer>
        <FootersLinks>
          <FootersList>
            <FootersLink href="#about">About</FootersLink>
          </FootersList>
          <FootersList>
            <FootersLink href="#services">Services</FootersLink>
          </FootersList>
          <FootersList>
            <FootersLink href="#projects">Projects</FootersLink>
          </FootersList>
        </FootersLinks>
        <FootersCopy>
          &#169; All Rights Reserved By{' '}
          <FootersCopyLink
            href="https://github.com/IvanTymoshchuk/"
            rel="noreferrer"
            target="_blank"
          >
            Timacode.
          </FootersCopyLink>
        </FootersCopy>
      </FootersContainer>
    </Footers>
  );
};
