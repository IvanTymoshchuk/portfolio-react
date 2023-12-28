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
          <Form />
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
