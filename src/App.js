import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='test'>App</h1>
      <Portfolio />
      <Contact />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
