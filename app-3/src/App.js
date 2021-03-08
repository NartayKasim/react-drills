import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      groceryList: ['Milk', 'Butter', 'Bread', 'Cheese', 'Salami', 'Jam', 'Mayonaise', 'Sour Cream']
    }
  }

  handleChange(value) {
    this.setState({ userInput: value })
  }

  render() {

    const filterList = this.state.groceryList.filter( element => element.includes(this.state.userInput)).map((element, index) => {return <h2 key={index}>{ element }</h2>})

    return (

      <div className="App">

        <input type="text" onChange={ e => this.handleChange(e.target.value) }/>

        { filterList }

      </div>
    )
  }
}

export default App;
