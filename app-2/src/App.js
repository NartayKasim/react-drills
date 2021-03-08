import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      arr: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    }
}

render() {

  const lister = this.state.arr.map((element, index) => { return <h2 key={ index }>{ element }</h2> })

  return(
    <div className="listing">
      { lister }    
    </div>
    )
  }
}

export default App;