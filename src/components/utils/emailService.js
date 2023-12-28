import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { notifyOptions } from './notifyOptions';

export const sendEmail = formRef => {
  return emailjs
    .sendForm(
      'service_g4wah68',
      'template_omz031u',
      formRef,
      'P8j-HPgeqVa3ti0oj'
    )
    .then(
      () => {
        toast.success('Message sent successfully ✅', notifyOptions);
        formRef.reset();
      },
      () => {
        toast.error('Message not sent (service error) ❌', notifyOptions);
      }
    );
};
