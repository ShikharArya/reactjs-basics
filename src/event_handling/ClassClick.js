import React, { Component } from 'react'

class ClassClick extends Component {
    // constructor(){
    //     super()
    // }
    
    clickHandler(){
        console.log('Button is clicked')
    }
  render() {
    return (
      <div>
           <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick