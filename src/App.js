import React, { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';

function App() {

  // DEFINE NAVIGATION CATEGORIES USING STATE
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

  // SET DEFAULT CATEGORY STATE TO 'ABOUT ME' SECTION
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // CONDITIONALLY RENDER COMPONENTS BASED ON CURRENT CATEGORY STATE
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

  // RETURN JSX, PASS STATE METHODS/VARIABLES TO HEADER COMPONENT
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
