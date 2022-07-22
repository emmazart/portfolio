import React, { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';

function App() {

  const [categories] = useState([
    {
      name: "About me"
    },
    { 
      name: "Contact"
    },
    { 
      name: "Portfolio"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function handleCategory(currentCategory, categories) {
    switch(currentCategory.name) {
      case 'About me': 
        return(<About />)
      case 'Contact':
        return(<Contact />)
      case 'Portfolio':
        return(<Portfolio />)
      case 'Resume':
        return(<Resume />)
      default: 
        return(<About />)
    };
  }

  return (
    <div className="App p-9">
      <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {handleCategory(currentCategory)}
      <Footer />
    </div>
  );
}

export default App;
