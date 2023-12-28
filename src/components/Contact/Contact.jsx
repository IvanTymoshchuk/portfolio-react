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
  ContactSocial,
  ContactSocialArrow,
  ContactSocialData,
  ContactSocialDescr,
  ContactSocialDescr2,
  ContactSocialLinks,
  ContactSocialLink,
} from './Contact.styled';
import { Form } from './Form/Form';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';
import arrow from '../../img/curved-arrow.svg';

export const Contact = () => {
  return (
    <Section id="contact">
      <ContactContainer>
        <ContactData>
          <ContactTitle>
            <Span>Contact Me.</Span>
          </ContactTitle>
          <ContactDescr>
            I will read all emails. Send me any message you want and I'll get
            back to you.
          </ContactDescr>
          <ContactDescrSec>
            I need your <b>Name</b> and <b>Email Address</b>, but you won't
            receive anything other than your reply.
          </ContactDescrSec>
          <GeometricBox></GeometricBox>
        </ContactData>

        <ContactMail>
          <ContactTitleSec>Send Me A Message</ContactTitleSec>
          <Form />
        </ContactMail>

        <ContactSocial>
          <ContactSocialArrow src={arrow} alt="arrow" />
          <ContactSocialData>
            <div>
              <ContactSocialDescr>Does not send emails</ContactSocialDescr>
              <ContactSocialDescr2>
                Write me on my social networks
              </ContactSocialDescr2>
            </div>
            <ContactSocialLinks>
              <ContactSocialLink
                href="https://github.com/IvanTymoshchuk"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill />
              </ContactSocialLink>

              <ContactSocialLink
                href="https://www.linkedin.com/in/ivan-tymoshchukk/"
                target="_blank"
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
