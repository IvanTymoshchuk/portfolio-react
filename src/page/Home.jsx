import React from 'react';
import { HomeComp } from '../components/Home/HomeComp';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';
import { Projects } from 'components/Projects/Projects';
import { Contact } from 'components/Contact/Contact';

const Home = () => {
  return (
    <>
      <HomeComp />
      <About />
      <Services />
      <Projects />
      <Contact/>
    </>
  );
};

export default Home;
