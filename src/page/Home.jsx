import React from 'react';
import { HomeComp } from '../components/Home/HomeComp';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';
import { Projects } from 'components/Projects/Projects';

const Home = () => {
  return (
    <>
      <HomeComp />
      <About />
      <Services />
      <Projects/>
    </>
  );
};

export default Home;
