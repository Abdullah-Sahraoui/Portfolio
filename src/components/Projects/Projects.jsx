import './projects.css'
import Tile from '../Tile/Tile';
import faceApp from '../../SVG/Face-Recognition-App.jpg';
import robots from '../../SVG/RoboFriends.jpg';
import notes from '../../SVG/Notes.jpg';

const Projects = () => {
  return (
    <div className="projects-container flex flex-col">
      <p className="projects-title text-5xl text-center p-12 pb-0 uppercase">projects</p>
      <p className="projects-subtitle text-lg text-center p-4 pt-2">These are some of my more recent projects</p>
      <div className="mt-20 p-8 tiles flex justify-around">
        <Tile src={faceApp} title="Face-Recognition-App"/>
        <Tile src={robots} title="RoboFriends"/>
        <Tile src={notes} title="Notes Application"/>
      </div>
    </div>
  )
}

export default Projects;