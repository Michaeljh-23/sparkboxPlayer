import React from 'react';
import Navigation from './Nav';
import video from '../dist/Videos/Pexels_Videos_2792967.mp4';

const About = () => {
  return (
    <div>
      <video src={video} type="video/mp4" controls autoPlay loop ></video>
    <div className='mainWrapAbout'>
      <Navigation />

    <p>This is the p about Sparbox jfaslkdjfsad fjdlakfjs alskfjklsajfiifhurhae feufhaunv fjaifein ain ifnein afw e pf ifeijfeifeiafh beifaiefja  feijfiajfijfa baifhjaifj</p>
    </div>
    </div>
  )
}
export default About;