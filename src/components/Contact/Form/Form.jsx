import React, { useRef } from 'react';
import { sendEmail } from 'components/utils/emailService';
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

  const onSubmit = e => {
    e.preventDefault();
    sendEmail(form.current);
  };

  return (
    <ContactForm id="contact-form" ref={form} onSubmit={onSubmit}>
      <ContactGroup>
        <ContactBox>
          <ContactInput
            type="text"
            name="user_name"
            placeholder="First Name"
            id="name"
            required
          />
          <ContactLabel htmlFor="name">First Name </ContactLabel>
        </ContactBox>

        <ContactBox>
          <ContactInput
            type="email"
            name="user_email"
            placeholder="Email Address"
            id="email"
            required
          />
          <ContactLabel htmlFor="email">Email Address</ContactLabel>
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
        <ContactLabel htmlFor="subject">Subject</ContactLabel>
      </ContactBox>

      <ContactArea>
        <ContactInput
          name="user_message"
          placeholder="Message"
          id="message"
          required
        ></ContactInput>
        <ContactLabel htmlFor="message">Message</ContactLabel>
      </ContactArea>
      <ContactMessage id="contact-message"></ContactMessage>
      <ContactBtn type="submit">
        <RiMailLine /> Send Message
      </ContactBtn>
    </ContactForm>
  );
};
