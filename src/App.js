import React from 'react';
import './css/App.css';
import './css/Footer.css';
import Carousel from './components/carousel';
import Footer from './components/footer';
import FooterTop from './components/footerTop';
// import GetStarted from './components/getStarted';
import Hero from './components/hero';
import Header from './components/navBar';
import Steppers from './components/steppers';
import Support from './components/support';
import WhyLeapsail from './components/whyLeapsail';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <GetStarted/> */}
      <Carousel />
      <WhyLeapsail />
      <Steppers />
      <Support />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
