import React, { Component } from "react";

class NewTask extends Component {
    constructor() {
        super();
        
        this.state = {
            inputText: ''
        }
    }

    onChange(val){
        this.setState( { inputText: val } )
    }

    stager = () => {
        this.props.stageTask(this.state.inputText)
        this.setState({ inputText: '' })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder = "type new task" value={ this.state.inputText }onChange={ e => this.onChange(e.target.value) }/>
                <button onClick={ this.stager }>Add Task</button>
                <br />
            </div>
        )
    }
}

export default NewTask;