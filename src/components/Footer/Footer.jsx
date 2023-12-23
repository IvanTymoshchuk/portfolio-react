import React from 'react';

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container container grid">
        <ul class="footer__links">
          <li>
            <a href="#about" class="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" class="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" class="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <span class="footer__copy">
          &#169; All Rights Reserved By <a href="#">Timacode.</a>
        </span>
      </div>
    </footer>
  );
};


