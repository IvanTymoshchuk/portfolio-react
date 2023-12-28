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
    <Section>
      <SectionTitle>
        <Span>Services.</Span>
      </SectionTitle>
      <ServicesContainer>
        <ServicesCard>
          <ServicesBorder></ServicesBorder>

          <ServicesContent>
            <ServicesIcon>
              <ServicesBox></ServicesBox>
              <RiCodeBoxLine />
            </ServicesIcon>
            <ServicesTitleSec>Development</ServicesTitleSec>
            <ServicesDesr>
              Custom web development tailored to your specifications, designed
              to provide a flawless user experience.
            </ServicesDesr>
          </ServicesContent>
        </ServicesCard>
        <ServicesCard>
          <ServicesBorder></ServicesBorder>

          <ServicesContent>
            <ServicesIcon>
              <ServicesBox></ServicesBox>
              <LuSmartphone />
            </ServicesIcon>
            <ServicesTitleSec>Mobile App</ServicesTitleSec>
            <ServicesDesr>
              Design and transform website projects into mobile apps to provide
              a seamless user experience.
            </ServicesDesr>
          </ServicesContent>
        </ServicesCard>
      </ServicesContainer>
    </Section>
  );
};
