import React from 'react';
import Navigation from './Nav';
import video from '../dist/Videos/Pexels_Videos_2792967.mp4';

const About = (props) => {
  return (
    <div>
      <video src={video} type="video/mp4" autoPlay loop ></video>
    <div className='mainWrapAbout'>
      <Navigation playPause={props.playPause} stop_sound={props.stop_sound} restart_track={props.restart_track}/>

    <p>This is the p about Sparbox jfaslkdjfsad fjdlakfjs alskfjklsajfiifhurhae feufhaunv fjaifein ain ifnein afw e pf ifeijfeifeiafh beifaiefja  feijfiajfijfa baifhjaifj</p>
    </div>
    </div>
  )
}
export default About;