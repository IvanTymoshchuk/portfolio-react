import React from 'react';
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
    <Footers class="footer">
      <FootersContainer class="footer__container container grid">
        <FootersLinks class="footer__links">
          <li>
            <FootersLink href="#about" class="footer__link">
              About
            </FootersLink>
          </li>
          <li>
            <FootersLink href="#services" class="footer__link">
              Services
            </FootersLink>
          </li>
          <li>
            <FootersLink href="#projects" class="footer__link">
              Projects
            </FootersLink>
          </li>
        </FootersLinks>
        <FootersCopy class="footer__copy">
          &#169; All Rights Reserved By{' '}
          <FootersCopyLink href="#">Timacode.</FootersCopyLink>
        </FootersCopy>
      </FootersContainer>
    </Footers>
  );
};
