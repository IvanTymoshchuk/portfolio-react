import React, { useRef } from 'react';
import {
  Section,
  ContactContainer,
  ContactData,
  ContactTitle,
  Span,
  ContactDescr,
  ContactDescrSec,
  GeometricBox,
  ContactMail,
  ContactTitleSec,
  ContactForm,
  ContactGroup,
  ContactBox,
  ContactInput,
  ContactLabel,
  ContactArea,
  ContactMessage,
  ContactBtn,
  ContactSocial,
  ContactSocialArrow,
  ContactSocialData,
  ContactSocialDescr,
  ContactSocialDescr2,
  ContactSocialLinks,
  ContactSocialLink,
} from './Contact.styled';
import emailjs from '@emailjs/browser';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill, RiMailLine } from 'react-icons/ri';
import arrow from '../../img/curved-arrow.svg';

export const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_g4wah68',
        'template_omz031u',
        form.current,
        'P8j-HPgeqVa3ti0oj'
      )
      .then(
        result => {
          console.log('Message sent successfully ✅');
        },
        error => {
          console.log('Message not sent (service error) ❌');
        }
      );
  };
  return (
    <Section class="contact section" id="contact">
      <ContactContainer class="contact__container grid">
        <ContactData class="contact__data">
          <ContactTitle class="section__title-2">
            <Span>Contact Me.</Span>
          </ContactTitle>
          <ContactDescr class="contact__description-1">
            I will read all emails. Send me any message you want and I'll get
            back to you.
          </ContactDescr>
          <ContactDescrSec class="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won't
            receive anything other than your reply.
          </ContactDescrSec>
          <GeometricBox class="geometric-box"></GeometricBox>
        </ContactData>

        <ContactMail class="contact__mail">
          <ContactTitleSec class="contact__title">
            Send Me A Message
          </ContactTitleSec>
          <ContactForm
            class="contact__form"
            id="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <ContactGroup class="contact__group">
              <ContactBox class="contact__box">
                <ContactInput
                  type="text"
                  name="user_name"
                  placeholder="First Name"
                  class="contact__input"
                  id="name"
                  required
                />
                <ContactLabel for="name" class="contact__label">
                  First Name{' '}
                </ContactLabel>
              </ContactBox>

              <ContactBox class="contact__box">
                <ContactInput
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  class="contact__input"
                  id="email"
                  required
                />
                <ContactLabel for="email" class="contact__label">
                  Email Address
                </ContactLabel>
              </ContactBox>
            </ContactGroup>

            <ContactBox class="contact__box">
              <ContactInput
                type="text"
                name="user_subject"
                placeholder="Subject"
                class="contact__input"
                id="subject"
                required
              />
              <ContactLabel for="subject" class="contact__label">
                Subject
              </ContactLabel>
            </ContactBox>

            <ContactArea class="contact__box contact__area">
              <ContactInput
                name="user_message"
                placeholder="Message"
                class="contact__input"
                id="message"
                required
              ></ContactInput>
              <ContactLabel for="message" class="contact__label">
                Message
              </ContactLabel>
            </ContactArea>
            <ContactMessage
              class="contact__message"
              id="contact-message"
            ></ContactMessage>
            <ContactBtn type="submit" class="contact__button button">
              <RiMailLine /> Send Message
            </ContactBtn>
          </ContactForm>
        </ContactMail>

        <ContactSocial class="contact__social">
          <ContactSocialArrow
            src={arrow}
            alt="arrow"
            class="contact__social-arrow"
          />
          <ContactSocialData class="contact__social-data">
            <div>
              <ContactSocialDescr class="contact__social-description-1">
                Does not send emails
              </ContactSocialDescr>
              <ContactSocialDescr2 class="contact__social-description-2">
                Write me on my social networks
              </ContactSocialDescr2>
            </div>
            <ContactSocialLinks class="conatact__social-links">
              <ContactSocialLink
                href="https://github.com/IvanTymoshchuk"
                target="_blank"
                class="conatact__social-link"
                rel="noreferrer"
              >
                <RiGithubFill />
              </ContactSocialLink>

              <ContactSocialLink
                href="https://www.linkedin.com/in/ivan-tymoshchukk/"
                target="_blank"
                class="conatact__social-link"
                rel="noreferrer"
              >
                <FaLinkedin />
              </ContactSocialLink>
            </ContactSocialLinks>
          </ContactSocialData>
        </ContactSocial>
      </ContactContainer>
    </Section>
  );
};
