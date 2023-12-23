import React from 'react';

export const Services = () => {
  return (
    <section class="services section">
      <h2 class="section__title-2">
        <span>Services.</span>
      </h2>
      <div class="services__container container grid">
        <article class="services__card">
          <div class="services__border"></div>

          <div class="services__content">
            <div class="services__icon">
              <div class="services__box"></div>
              <i class="ri-code-box-line"></i>
            </div>
            <h2 class="services__title">Development</h2>
            <p class="services__descr">
              Custom web development tailored to your specifications, designed
              to provide a flawless user experience.
            </p>
          </div>
        </article>
        <article class="services__card">
          <div class="services__border"></div>

          <div class="services__content">
            <div class="services__icon">
              <div class="services__box"></div>
              <i class="ri-smartphone-line"></i>
            </div>
            <h2 class="services__title">Mobile App</h2>
            <p class="services__descr">
              Design and transform website projects into mobile apps to provide
              a seamless user experience.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
