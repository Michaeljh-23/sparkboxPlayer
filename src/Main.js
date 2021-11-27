import React from 'react';
import Navigation from './Nav';
import {Card} from 'react-bootstrap'
import ReactModal from 'react-modal-resizable-draggable';
import bessFriend from "../dist/Media/01 Bess Friend.mp3";
import Euphoria from "../dist/Media/Euphoria-Sparkbox.mp3";
import bussLocation from "../dist/Media/Buss-Location.mp3";
import OnlyYou from "../dist/Media/It's Only You Sparkbox.mp3";
import MarchOnMars from "../dist/Media/March on MarsV4Mastered - Sparkbox.mp3";
import Ignite from "../dist/Media/Sparkbox - IGNITE.mp3";
import HeadBop from "../dist/Media/Sparkbox-HeadBop.mp3";
import folder from "../dist/34053b77a00e8619eeab4c60f805fe24.png"
import file from "../dist/657e95bdde1c53541d604c4d22510e1b.png"
import DakitiAllstar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Dakiti - (Sparkbox Remix).mp3";
import MotleyCrewAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Don't Go Motley Crew (Sparkbox Edit).mp3";
import HurricaneAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Hurricane X Space Rave (Sparkbox Edit).mp3";
import KissMeEnMexicoAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Kiss Me En Mexico (Sparkbox Edit).mp3";
import LoveLateAtNightAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Love Late at Night (Sparkbox Wordplay Edit).mp3";
import MadsterPieceAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/MadsterPiece  (Sparkbox Edit).mp3";
import NeverGonnaFindAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Never Gonna Find X Stuntin Like My Daddy (Sparkbox Edit).mp3";
import ShaftGotMoneyAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Shaft Got Money (Sparkbox Flip).mp3";
import TimeTodayAllStar from "../dist/Media/All-Star Special Edit Pack Vol. 1/Time Today (Sparkbox Flip).mp3"
import OGwindows from "../dist/a79eeb782192cd557e996596c6ec7713.jpeg"
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOneIsOpen: false,
      modalTwoIsOpen: false,
      modalThreeIsOpen: false
    };
    this.openModalOne = this.openModalOne.bind(this);
    this.closeModalOne = this.closeModalOne.bind(this);
    this.openModalTwo = this.openModalTwo.bind(this);
    this.closeModalTwo = this.closeModalTwo.bind(this);
    this.openModalThree = this.openModalThree.bind(this);
    this.closeModalThree = this.closeModalThree.bind(this);

  }

  openModalOne() {
    this.setState({ modalOneIsOpen: true });
  }
  closeModalOne() {
    this.setState({ modalOneIsOpen: false });
  }

  openModalTwo() {
    this.setState({ modalTwoIsOpen: true });
  }
  closeModalTwo() {
    this.setState({ modalTwoIsOpen: false });
  }
  openModalThree() {
    this.setState({ modalThreeIsOpen: true });
  }
  closeModalThree() {
    this.setState({ modalThreeIsOpen: false });
  }
  //style={{backgroundImage: `url(${OGwindows})`}}
  render() {
    console.log(this.props.init)
    return (
      <div className='mainWrap' >
        <Navigation
          playPause={this.props.playPause}
          stop_sound={this.props.stop_sound}
          restart_track={this.props.restart_track}
          init={this.props.init} />

        <h1> Home Page </h1>

        <button src={folder} onClick={this.openModalOne} className='folderAS'><img className='folderImg' src={folder} /><span className='folderASText'> All Star</span></button>
        <button src={folder} onClick={this.openModalTwo} className='folderBass'><img className='folderImg' src={folder} /><span className='folderASText'> Bass</span></button>
        <button src={folder} onClick={this.openModalThree} className='folderBeats'><img className='folderImg' src={folder} /><span className='folderASText'> Beats</span></button>

        <button onClick={this.props.stop_sound}>stop Song</button>
        <button onClick={this.props.playPause}>Play | Pause
        </button>
        <ReactModal
          disableResize={true}
          initWidth={400}
          initHeight={300}
          onFocus={() => console.log("Modal is clicked")}
          className={"all-star-modal"}
          onRequestClose={this.closeModalOne}
          isOpen={this.state.modalOneIsOpen}>
          <h3>All Star Special</h3>
          <button onClick={this.closeModalOne}>
            X
          </button>
          <div className="body">
            <button className="songFileBtn" onClick={() => this.props.update_song(DakitiAllstar, this.props.playIt)}><img className="file" src={file} /> <span>Dakiti</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(MotleyCrewAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Don't Go Motley Crew</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(HurricaneAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Hurricane</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(KissMeEnMexicoAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Kiss Me En Mexico</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(LoveLateAtNightAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Love Late At Night</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(MadsterPieceAllStar, this.props.playIt)}> <img className="file" src={file} /> <span>MadsterPiece</span> </button>
            <button className="songFileBtn" onClick={() => this.props.update_song(NeverGonnaFindAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Never Gonna Find</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(ShaftGotMoneyAllStar, this.props.playIt)}> <img className="file" src={file} /> <span>Shaft Got Money</span></button>
            <button className="songFileBtn" onClick={() => this.props.update_song(TimeTodayAllStar, this.props.playIt)}><img className="file" src={file} /> <span>Time Today</span></button>
          </div>
        </ReactModal>

        <ReactModal
          disableResize={true}
          initWidth={400}
          initHeight={300}
          onFocus={() => console.log("Modal is clicked")}
          className={"bass-modal"}
          onRequestClose={this.closeModalTwo}
          isOpen={this.state.modalTwoIsOpen}>
          <h3>Bass Specialist</h3>
          <div className="body">
            <Card style={{ width: '6rem', height: '8rem' , alignItems:'center'}}>
              <Card.Img variant="top" src={file} style={{height: '3rem', width: '3rem'}} />
              <Card.Body>
                <Card.Text>
                  Play It's Only You
                </Card.Text>
              </Card.Body>
            </Card>
            <button onClick={() => this.props.update_song(OnlyYou, this.props.playIt)}>Play It's Only You</button>
            <button onClick={() => this.props.update_song(MarchOnMars, this.props.playIt)}>Play March On Mars</button>
            <button onClick={() => this.props.update_song(Ignite, this.props.playIt)}>Play Ignite</button>
            <button onClick={() => this.props.update_song(HeadBop, this.props.playIt)}>Play Head Bop</button>
          </div>
          <button onClick={this.closeModalTwo}>
            X
          </button>
        </ReactModal>

        <ReactModal
          disableResize={true}
          initWidth={400}
          initHeight={300}
          onFocus={() => console.log("Modal is clicked")}
          className={"beats-modal"}
          onRequestClose={this.closeModalThree}
          isOpen={this.state.modalThreeIsOpen}>
          <h3>Beats Specialist</h3>
          <div className="body">
            <button onClick={() => this.props.update_song(bessFriend, this.props.playIt)}>Play bessFriend</button>
            <button onClick={() => this.props.update_song(bussLocation, this.props.playIt)}>Play bussLocation</button>
            <button onClick={() => this.props.update_song(Euphoria, this.props.playIt)}>Play Euphoria</button>
          </div>
          <button onClick={this.closeModalThree}>
            X
          </button>
        </ReactModal>
      </div>
    )
  }
}

export default Main;