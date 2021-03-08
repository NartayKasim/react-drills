import React, { Component } from 'react';
import Image from './image'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {}
  }


  render() {
    return (

      <div className="container">
        <Image url="https://via.placeholder.com/800x600"/>
      </div>

    )
  }
}

export default App;
