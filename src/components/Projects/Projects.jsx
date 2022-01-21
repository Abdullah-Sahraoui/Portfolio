import './projects.css'
import Tile from '../Tile/Tile';
import faceApp from '../../SVG/Face-Recognition-App.jpg';
import robots from '../../SVG/RoboFriends.jpg';
import notes from '../../SVG/Notes.jpg';

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="projects-title text-5xl p-12 pb-0 uppercase">projects</p>
        <p className="projects-subtitle text-lg p-4 pt-2">These are some of my more recent projects</p>
      </div>
      <div className="tiles-container flex flex-col">
        <div className="mt-20 p-8 tiles gap-6 flex justify-around">
          <Tile src={faceApp} title="Face-Recognition-App"/>
          <Tile src={robots} title="RoboFriends"/>
          <Tile src={notes} title="Notes Application"/>
        </div>
      </div>
    </div>
  )
}

export default Projects;