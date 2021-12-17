import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="main-div">
    {/* div.cover is for the grey overlay */}
      <div className="cover"></div>
      <Navigation />
    </div>
  );
}

export default App;
