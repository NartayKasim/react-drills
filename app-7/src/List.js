import React, { Component } from "react";
import Todo from "./Todo"

class List extends Component {

    render() {
        let list = this.props.tasks.map((elements, index) => {
            let incrementer = index + 1
            return <Todo rank={incrementer} key={index} task={elements}/ >
        })

        return(
            <div>
                {list}
            </div>

        )
    }
}

export default List;