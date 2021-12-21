import Navigation from '../Navigation/Navigation';
import './intro-page.css';

const IntroPage = () => {
  return (
    <div>
      <Navigation />
      <div className="intro-container text-3xl flex justify-center items-center">
        <div className="intro-page flex flex-wrap flex-col p-8 border border-transparent rounded-2xl shadow-md">
          <p className="p-4">Hi there! I'm Abdullah, a junior front-end developer based in London.</p>
          <p className="p-4">Keep scrolling to see some of my work.</p>
        </div>
      </div>
    </div>
  )
}

export default IntroPage;