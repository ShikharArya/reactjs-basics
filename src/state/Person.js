import React, { Component } from 'react'

export class Person extends Component {
  constructor(){
      super()

      this.state = {
          name:"Scott",
          city : "Boston",
          isAdmin : true
      }
  }
  
    render() {

        const { name, city, isAdmin } = this.state
        return (
        <div>
                <h2> Name : {name } </h2> 
                <h2> City : {city } </h2> 
                <h2> isAdmin : {isAdmin ? "True" : "False" } </h2>   
        </div>
        )
  }
}

export default Person