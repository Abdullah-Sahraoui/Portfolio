import Navigation from '../Navigation/Navigation';
import './intro-page.css';

const IntroPage = () => {
  return (
    <div>
      <div className="intro-container text-3xl flex justify-center items-center">
        <div className="intro-page flex flex-nowrap flex-col p-8 border border-transparent rounded-2xl shadow-md">
          <div className="p-4">
            Hi there! I'm Abdullah, a junior front-end developer based in London.
          </div>
          <div className="p-4">
            Keep scrolling to see some of my work.
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPage;