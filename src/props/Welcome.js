import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    const {name, skill} = this.props
    return (
      <div>
          <h2>{ name } is a { skill }</h2>
      </div>
    )
  }
}

export default Welcome