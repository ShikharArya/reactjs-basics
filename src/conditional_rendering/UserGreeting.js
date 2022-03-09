// import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn : false
        }
    }
  render() {
        if(this.state.isLoggedIn){
            return(
                <div>
                    <h2>Welcome Scott</h2>
                </div>
            )
        }else{
            return(
                <div>
                    <h2>Welcome Guest</h2>
                </div>
            )
        }
    
  }
}

export default UserGreeting