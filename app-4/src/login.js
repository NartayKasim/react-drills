import React, { Component, useImperativeHandle } from 'react'

class Login extends Component {
     constructor() {
          super();

          this.state = {
               username: '',
               password: ''
          }
     }

     handleUsername(value) {
          this.setState({ username:value })
     }

     handlePassword(value) {
          this.setState( { password:value } )
     }

     submit = () => {
          alert(`username: ${this.state.username} password: ${this.state.password}`)
     }


     render() {
          return (

               <div>             
               <input placeholder="username" type="text" onChange={ e => this.handleUsername(e.target.value) }/>
               <input placeholder="password" type="text" onChange={ e => this.handlePassword(e.target.value) }/>
               <button onClick={ this.submit }>Submit</button>
               </div>
  
          )
     }
}

export default Login