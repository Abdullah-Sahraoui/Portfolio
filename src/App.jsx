import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import IntroPage from './components/intro-page/Intro-page';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="main-div">
      <div>
        <Navigation />
        <IntroPage />
        <Projects />
      </div>
    </div>
  );
}

export default App;
