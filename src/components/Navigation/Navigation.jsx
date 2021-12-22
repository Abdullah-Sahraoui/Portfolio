import { useState } from 'react';
import './navigation.css';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    (window.scrollY >= 127) ? setNavbar(true) : setNavbar(false);
  }

  window.addEventListener("scroll", changeBg);

  const classes = "header flex shadow-lg sticky top-0 bg-white";
  
  return (
    <div className={(navbar ? classes + " active" : classes + " inactive")}>
      <div className="p-4 flex flex-col w-3/5">
        <p className="black-rocket text-7xl ml-2">Abdullah Sahraoui</p>
        <p className="subtitle ml-6">Junior Front-End Developer</p>
      </div>
      <ul className="flex p-2 nav-items uppercase w-2/5 justify-around items-center">
        <li className="transition-opacity hover:opacity-75"><a href="#">Home</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">Projects</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">About</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation;