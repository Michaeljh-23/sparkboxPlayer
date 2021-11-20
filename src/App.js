import React from "react";
import Navigation from "./Nav";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import About from "./About.js";
import Main from "./Main";
import bessFriend from "../dist/Media/01 Bess Friend.mp3";
import Euphoria from "../dist/Media/Euphoria-Sparkbox.mp3";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currSong: new Audio(bessFriend),
      isPlaying: false
    }
    this.update_song = this.update_song.bind(this);
    this.stop_sound = this.stop_sound.bind(this);
    this.playPause = this.playPause.bind(this);
    this.playIt = this.playIt.bind(this);
    this.restart_track = this.restart_track.bind(this);
  }

  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      // Pause the song if it is playing
      this.state.currSong.pause();
    } else {
      // Play the song if it is paused
      this.state.currSong.play();
    }
    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  update_song = (clicked, cb) => {
    const stopAndSetSong = new Promise ((resolve, reject) => {
      this.stop_sound();
      this.setState({
        currSong: new Audio(clicked),
      })
      resolve('success!')
    })
    stopAndSetSong.then(() => {
      cb();
    })
  }

  restart_track = () => {
    const stopAndRestartSong = new Promise ((resolve, reject) => {
      this.stop_sound();
      console.log('done')
      resolve('success!')
    })
    stopAndRestartSong.then(() => {
      console.log('doneTwo')
      this.playIt();
    })
  }

  playIt = () => {
    this.state.currSong.play();
    this.setState({isPlaying: true})
  }

  stop_sound = () => {
    // There's no 'this.sound.stop()' function. Can you believe it?
    console.log('activated')
    this.state.currSong.pause();
    this.state.currSong.currentTime = 0;
    this.setState({isPlaying: false})
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main
          name={this.props.name}
          update_song={this.update_song}
          playIt={this.playIt}
          stop_sound={this.stop_sound}
          playPause={this.playPause}
          restart_track={this.restart_track}/>}/>
          <Route path='/about' element={<About playPause={this.playPause} stop_sound={this.stop_sound} restart_track={this.restart_track}/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;
