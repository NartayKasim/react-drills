import React, { Component } from 'react'

export default class Image extends Component {
   render() {
      return( 
         <div>

            <img src={ this.props.url} alt=""/>
            <h1>Error 409</h1>

         </div>
      )
   }
}