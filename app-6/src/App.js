import React, { Component } from 'react'
import DisplayTodo from './Todo'
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userTask: '',
      todo: []
    };
  };

  handleChange(val) {
    this.setState({ userTask: val})
  }

  addTodo = () => {
    let stageTodo = this.state.todo
    stageTodo.push(this.state.userTask)
    this.setState({ todo: stageTodo , userTask:'' })
  }

  render() {

    let todoDisplay = this.state.todo.map((element, index) => { return <DisplayTodo key={ index } task = { element } /> })

    return(
      <div className="App">
          <input placeholder="type in todo" onChange={ e => this.handleChange(e.target.value) } value={ this.state.userTask } />
          <button onClick={ this.addTodo }>Add</button>
          <h1>TO DO:</h1>
          { todoDisplay }
      </div>
    );
  };
}

export default App;