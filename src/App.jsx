import React from 'react';
import './App.css';
import IntroPage from './components/intro-page/Intro-page';

function App() {
  return (
    <div className="main-div">
    {/* div.cover is for the grey overlay */}
      <div className="cover">
        <IntroPage />
      </div>
    </div>
  );
}

export default App;
