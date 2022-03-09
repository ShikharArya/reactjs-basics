import React, { Component } from 'react'

export class Message extends Component {

  constructor(){
      super()

      this.state = {
          message : 'Welcome Scott'
      }
  } 

  subscribe() {
    //   this.state.message = "Here you can subscribe"
    this.setState({
        message : 'Thank you for subscribing'
    })

  }
  render() {
    return (
      <div className='container'>
          <h2>
              {this.state.message}

          <button className='btn btn-primary' onClick={() => this.subscribe()}>Subscribe</button>            
          </h2>
      </div>
    )
  }
}

export default Message