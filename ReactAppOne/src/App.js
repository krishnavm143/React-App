import React from 'react';
import Footer from './Footer';
// import ReactDom from 'react-dom';
import Navbar from './Navbar';
import AppSection from './AppSection';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
// import Footer from './Footer';

const App=()=>{
  return(
    <div>
      {/* <h1>Hello Everyone</h1> */}
      <Navbar />
      <HeroSection />
      <CardSection />
      <AppSection />
      <Footer />
    </div>
  )
}
export default App;
