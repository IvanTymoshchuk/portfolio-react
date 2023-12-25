import React from 'react';
import {
  Section,
  SectionTitle,
  Span,
  ServicesContainer,
  ServicesCard,
  ServicesBorder,
  ServicesContent,
  ServicesIcon,
  ServicesBox,
  ServicesTitleSec,
  ServicesDesr,
} from './Services.styled';
import { RiCodeBoxLine } from 'react-icons/ri';
import { LuSmartphone } from 'react-icons/lu';

export const Services = () => {
  return (
    <Section class="services section">
      <SectionTitle class="section__title-2">
        <Span>Services.</Span>
      </SectionTitle>
      <ServicesContainer class="services__container container grid">
        <ServicesCard class="services__card">
          <ServicesBorder class="services__border"></ServicesBorder>

          <ServicesContent class="services__content">
            <ServicesIcon class="services__icon">
              <ServicesBox class="services__box"></ServicesBox>
              <RiCodeBoxLine className="services__icons" />
            </ServicesIcon>
            <ServicesTitleSec class="services__title">
              Development
            </ServicesTitleSec>
            <ServicesDesr class="services__descr">
              Custom web development tailored to your specifications, designed
              to provide a flawless user experience.
            </ServicesDesr>
          </ServicesContent>
        </ServicesCard>
        <ServicesCard class="services__card">
          <ServicesBorder class="services__border"></ServicesBorder>

          <ServicesContent class="services__content">
            <ServicesIcon class="services__icon">
              <ServicesBox class="services__box"></ServicesBox>
              <LuSmartphone className="services__icons" />
            </ServicesIcon>
            <ServicesTitleSec class="services__title">
              Mobile App
            </ServicesTitleSec>
            <ServicesDesr class="services__descr">
              Design and transform website projects into mobile apps to provide
              a seamless user experience.
            </ServicesDesr>
          </ServicesContent>
        </ServicesCard>
      </ServicesContainer>
    </Section>
  );
};
