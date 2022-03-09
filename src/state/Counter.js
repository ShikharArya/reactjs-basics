import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
       super() 

       this.state = {
           count : 0
       }
    }

    addCount(){
        //this.state.counter = this.state.counter + 1    -- never do this
        //Always use setState to update the state
        this.setState({
            count: this.state.count + 1
        }, () => console.log(this.state.count))
        
    }
    render() {
    return (
      <div className='container'>
          <h2>Counter : { this.state.count }</h2>
          <button className='btn btn-primary' onClick={() => this.addCount()}>Add Count</button>
      </div>
    )
  }
}

export default Counter