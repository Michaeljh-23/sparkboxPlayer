import React from 'react';
import Navigation from './Nav';
import ReactModal from 'react-modal-resizable-draggable';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
  };

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}


openModal() {
  this.setState({modalIsOpen: true});
}
closeModal() {
  this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <div className='mainWrap'>
        <Navigation />
        <h1> Home Page </h1>
        <button onClick={this.openModal}>Hello {this.props.name}</button>
        <ReactModal
                    initWidth={400}
                    initHeight={300}
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal"}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.modalIsOpen}>
                    <h3>Album Name</h3>
                    <div className="body">
                        <p>Here is the nice list of Tracks, mapped out</p>
                    </div>
                    <button onClick={this.closeModal}>
                       X
                    </button>
                </ReactModal>
      </div>
    )
  }
}

export default Main;