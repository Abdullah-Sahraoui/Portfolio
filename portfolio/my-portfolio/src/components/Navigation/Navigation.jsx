import './navigation.css';

const Navigation = () => {
  return (
    <div className="header flex shadow-lg sticky">
      <div className="p-4 flex flex-col w-3/5">
        <p className="black-rocket text-7xl ml-2">Abdullah Sahraoui</p>
        <p className="subtitle ml-6">Junior Front-End Developer</p>
      </div>
      <ul className="flex p-2 subtitle uppercase w-2/5 justify-around items-center">
        <li className="transition-opacity hover:opacity-75"><a href="#">Home</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">Projects</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">About</a></li>
        <li className="transition-opacity hover:opacity-75"><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation;