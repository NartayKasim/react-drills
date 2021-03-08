import React, { Component } from "react";
import NewTask from "./NewTask.js"
import List from "./List"
import "./index.css";

class App extends Component {
     constructor() {
          super();

          this.state = {
               tasks: [],
          };
     }

     addTask = (val) => {
          if (val.length > 0) {
               let addToTasks = this.state.tasks;
               addToTasks.push(val)
               this.setState({ tasks: addToTasks })
          }
     }

     render() {

          return(
               <div>
                    <h1>To Do Task Creator:</h1> 
                    <NewTask stageTask={ this.addTask }/>
                    <h1>To Do:</h1>
                    <List tasks={this.state.tasks}/>
               </div>
          )
     }
}

export default App;