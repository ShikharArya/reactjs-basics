import React, { Component } from 'react'

class EventBind extends Component {

    constructor(){
        super()

        this.state = {
            message : 'Hello'
        }
        //3rd Approach
        this.clickHandler = this.clickHandler.bind(this)

    }

    
    // clickHandler(){
    //     this.setState({
    //         message:"Thank you"
    //     })
    // }

    //4th Approach
    clickHandler = () =>{
        this.setState({
            message:"Thank you"
        })
    }
 
  render() {
    return (
      <div className='container'>
          <h2>{this.state.message}</h2>
          {/* <button className='btn btn-primary' onClick={this.clickHandler}>Click Me</button> */}

          {/* 1st Approach - use for sending parameters*/}
          {/* <button className='btn btn-primary' onClick={this.clickHandler.bind(this)}>Click Me</button> */}

            {/* 2nd Approach - use for sending parameters*/}
          {/* <button className='btn btn-primary' onClick={() => this.clickHandler()}>Click Me</button> */}

            {/* 3rd Approach */}
            {/* <button className='btn btn-primary' onClick={this.clickHandler}>Click Me</button> */}
             {/* 4th Approach */}
            <button className='btn btn-primary' onClick={this.clickHandler}>Click Me</button>

      </div>
    )
  }
}

export default EventBind