import React, { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.rank}. { this.props.task }</h2>
            </div>
        )
    }
}

export default Todo