import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailLine } from 'react-icons/ri';
import {
  ContactForm,
  ContactGroup,
  ContactBox,
  ContactInput,
  ContactLabel,
  ContactArea,
  ContactMessage,
  ContactBtn,
} from '../Contact.styled';

export const Form = () => {
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
  );
};
