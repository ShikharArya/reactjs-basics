import React, { Component } from 'react'

export class UserGreetingOne extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn : true
        }
    }
  render() {
      let message;
    if(this.state.isLoggedIn){
        message = <div><h2>Welcome Scott </h2> </div>
    }else{
        message = <div><h2>Welcome Guest</h2></div>
    }
        return <div>{message}</div>
    }
    
  }


export default UserGreetingOne