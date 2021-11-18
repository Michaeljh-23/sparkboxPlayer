import React from "react";
import Navigation from "./Nav";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import About from "./About.js";
import Main from "./Main";
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

export default App;
