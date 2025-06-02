import React from 'react';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
// import About from './container/About/About';
// import Header from './container/Header/Header';
// import Work from './container/Work/Work';
// import Testimonial from './container/Testimonial/Testimonial';
// import Skills from './container/Skills/Skills';
// import Footer from './container/Footer/Footer';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
    </div>
  )
}

export default App;