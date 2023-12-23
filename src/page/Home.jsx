import React from 'react';
import { HomeComp } from '../components/Home/HomeComp';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';

const Home = () => {
  return (
    <>
      <HomeComp />
      <About />
      <Services />
    </>
  );
};

export default Home;
