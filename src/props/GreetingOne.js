import React from 'react'

// function GreetingOne(props) {
//   return (
//     <h2>{ props.name } is a { props.skill }</h2>
//   )
// }

function GreetingOne({name : name, skill:skill}) {
    return (
      <h2>{ name } is a { skill }</h2>
    )
  }
export default GreetingOne