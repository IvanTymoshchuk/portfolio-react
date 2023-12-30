import { MotionAnimate } from 'react-motion-animate';
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
    <Section id="services">
      <MotionAnimate
        variant={{
          hidden: { opacity: 0.2, rotate: -180 },
          show: {
            opacity: 0.8,
            rotate: 0,
            transition: {
              repeat: Infinity,
              duration: 4,
              repeatDelay: 1,
              type: 'spring',
            },
          },
        }}
      >
        <SectionTitle>
          <Span>Services.</Span>
        </SectionTitle>
      </MotionAnimate>
      <ServicesContainer>
        <ServicesCard>
          <MotionAnimate
            animation="scrollFadeOut"
            reset={true}
            delay={0.4}
            speed={1}
          >
            <ServicesBorder></ServicesBorder>
            <ServicesContent>
              <ServicesIcon>
                <ServicesBox></ServicesBox>
                <RiCodeBoxLine className="services__icons" />
              </ServicesIcon>
              <ServicesTitleSec>Development</ServicesTitleSec>
              <ServicesDesr>
                Custom web development tailored to your specifications, designed
                to provide a flawless user experience.
              </ServicesDesr>
            </ServicesContent>
          </MotionAnimate>
        </ServicesCard>

        <ServicesCard>
          <MotionAnimate
            animation="scrollFadeOut"
            reset={true}
            delay={0.4}
            speed={1}
          >
            <ServicesBorder></ServicesBorder>
            <ServicesContent>
              <ServicesIcon>
                <ServicesBox></ServicesBox>
                <LuSmartphone className="services__icons" />
              </ServicesIcon>
              <ServicesTitleSec>Mobile App</ServicesTitleSec>
              <ServicesDesr>
                Design and transform website projects into mobile apps to
                provide a seamless user experience.
              </ServicesDesr>
            </ServicesContent>
          </MotionAnimate>
        </ServicesCard>
      </ServicesContainer>
    </Section>
  );
};
