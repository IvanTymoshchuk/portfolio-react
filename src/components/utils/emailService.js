import emailjs from '@emailjs/browser';

export const sendEmail = formRef => {
  return emailjs
    .sendForm(
      'service_g4wah68',
      'template_omz031u',
      formRef,
      'P8j-HPgeqVa3ti0oj'
    )
    .then(
      result => {
        console.log('Message sent successfully ✅');
        formRef.reset();
      },
      error => {
        console.log('Message not sent (service error) ❌');
      }
    );
};
