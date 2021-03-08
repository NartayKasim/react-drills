import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      updateChange: ''
    }

  }

  changer(value) {
    this.setState({ updateChange: value })
  }

  render() {
    return (
      <div className="App">
        <input className="in" onChange={ (e) => this.changer(e.target.value) } type="text"/>
        <h2 className="out">{ this.state.updateChange }</h2>
      </div>

    )
  }
}

export default App;