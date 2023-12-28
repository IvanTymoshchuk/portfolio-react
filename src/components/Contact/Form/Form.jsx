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
} from './Form.styled';

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
    <ContactForm id="contact-form" ref={form} onSubmit={sendEmail}>
      <ContactGroup>
        <ContactBox>
          <ContactInput
            type="text"
            name="user_name"
            placeholder="First Name"
            id="name"
            required
          />
          <ContactLabel for="name">First Name </ContactLabel>
        </ContactBox>

        <ContactBox>
          <ContactInput
            type="email"
            name="user_email"
            placeholder="Email Address"
            id="email"
            required
          />
          <ContactLabel for="email">Email Address</ContactLabel>
        </ContactBox>
      </ContactGroup>

      <ContactBox>
        <ContactInput
          type="text"
          name="user_subject"
          placeholder="Subject"
          id="subject"
          required
        />
        <ContactLabel for="subject">Subject</ContactLabel>
      </ContactBox>

      <ContactArea>
        <ContactInput
          name="user_message"
          placeholder="Message"
          id="message"
          required
        ></ContactInput>
        <ContactLabel for="message">Message</ContactLabel>

      </ContactArea>
      <ContactMessage id="contact-message"></ContactMessage>
      <ContactBtn type="submit">
        <RiMailLine /> Send Message
      </ContactBtn>
    </ContactForm>
  );
};
