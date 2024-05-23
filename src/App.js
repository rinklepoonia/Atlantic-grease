import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Nav from './components/Nav'
import ManufactorsSection from './components/ManufactorsSection';
import ApprovlesSection from './components/ApprovlesSection';
import CircleSection from './components/CircleSection';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';


function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });

  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <ManufactorsSection />
      <ApprovlesSection />
      <CircleSection />
      <Footer />
    </div>
  )
}

export default App
