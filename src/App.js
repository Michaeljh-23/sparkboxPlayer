import React from "react";
import Navigation from "./Nav";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import About from "./About.js";
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main name={this.props.name}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    )
  }
}


const Main = (props) => {
  return (
    <div className='mainWrap'>
      <Navigation />
      <h1> Home Page  </h1>
        <p>Hello {props.name}</p>
    </div>
  )
}
export default App;
