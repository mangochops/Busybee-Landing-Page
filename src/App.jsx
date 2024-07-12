import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Features from './partials/Features';
import HeroHome from './partials/HeroHome';
import FeaturesBlocks from './partials/FeaturesBlocks';
import Testimonials from './partials/Testimonials';
import Footer from './partials/Footer';


function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/HeroHome" element={<HeroHome />} />
        <Route exact path="/Features" element={<Features />} />
        <Route exact path="/FeaturesBlock" element={<FeaturesBlocks />} />
        <Route exact path="/Testimonials" element={<Testimonials />} />
        <Route exact path="/Footer" element={<Footer />} />
        
      </Routes>
    </>
  );
}

export default App;
