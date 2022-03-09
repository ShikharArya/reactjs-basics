import React from 'react'

const Greeting = (props) => {
    console.log(props)

    const {id, name, display, skill, isAdmin, children} = props
    return (
        <div className='container'>
            
            <h2>Id : { id }</h2>
            <h2>Welcome { name }</h2>
            <h2>LastName : { display} </h2>
            <h2>Skills : { skill }</h2>
            <h2>Is Admin : { isAdmin ? "True" : "False" }</h2>
            <br></br>
            {children}
        </div>
    )
}

export default Greeting