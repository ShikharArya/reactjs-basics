import React from 'react'

function NameListTwo() {

    const names = ["Scott", "Adam", "Tuan"]

    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    
     return(
        <div> 
            <h2>Here is your list</h2>
        <div className='container'>{nameList}</div>
        </div>
     )
}

export default NameListTwo