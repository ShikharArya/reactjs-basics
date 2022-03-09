import React, { Component } from 'react'

export class UserGreetingThree extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn : false
    }
}
  render() {
     return (
        this.state.isLoggedIn && <div><h2>Welcome Scott</h2></div>
     )
    
  }
}
export default UserGreetingThree