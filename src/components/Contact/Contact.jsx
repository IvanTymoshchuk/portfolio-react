import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill, RiMailLine } from 'react-icons/ri';
import arrow from '../../img/curved-arrow.svg';

export const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <div class="contact__container grid">
        <div class="contact__data">
          <h2 class="section__title-2">
            <span>Contact Me.</span>
          </h2>
          <p class="contact__description-1">
            I will read all emails. Send me any message you want and I'll get
            back to you.
          </p>
          <p class="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won't
            receive anything other than your reply.
          </p>
          <div class="geometric-box"></div>
        </div>

        <div class="contact__mail">
          <h2 class="contact__title">Send Me A Message</h2>
          <form class="contact__form" id="contact-form">
            <div class="contact__group">
              <div class="contact__box">
                <input
                  type="text"
                  name="user_name"
                  placeholder="First Name"
                  class="contact__input"
                  id="name"
                  required
                />
                <label for="name" class="contact__label">
                  First Name{' '}
                </label>
              </div>

              <div class="contact__box">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  class="contact__input"
                  id="email"
                  required
                />
                <label for="email" class="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div class="contact__box">
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                class="contact__input"
                id="subject"
                required
              />
              <label for="subject" class="contact__label">
                Subject
              </label>
            </div>

            <div class="contact__box contact__area">
              <textarea
                name="user_message"
                placeholder="Message"
                class="contact__input"
                id="message"
                required
              ></textarea>
              <label for="message" class="contact__label">
                Message
              </label>
            </div>
            <p class="contact__message" id="contact-message"></p>
            <button type="submit" class="contact__button button">
              <RiMailLine/> Send Message
            </button>
          </form>
        </div>

        <div class="contact__social">
          <img src={arrow} alt="arrow" class="contact__social-arrow" />
          <div class="contact__social-data">
            <div>
              <p class="contact__social-description-1">Does not send emails</p>
              <p class="contact__social-description-2">
                Write me on my social networks
              </p>
            </div>
            <div class="conatact__social-links">
              <a
                href="https://github.com/IvanTymoshchuk"
                target="_blank"
                class="conatact__social-link"
                rel="noreferrer"
              >
                <RiGithubFill/>
              </a>

              <a
                href="https://www.linkedin.com/in/ivan-tymoshchukk/"
                target="_blank"
                class="conatact__social-link"
                rel="noreferrer"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
