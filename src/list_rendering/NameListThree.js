import React from 'react'

function NameListThree() {

    const persons = [
        {
            id: 1,
            name:"Scott",
            age:45,
            skills : "Java"
        },
        {
            id: 2,
            name:"Adam",
            age:45,
            skills : "Python"
        },
        {
            id: 3,
            name:"Tuan",
            age:45,
            skills : "C++"
        },
        {
            id: 4,
            name:"Steve",
            age:45,
            skills : "JS"
        },
    ]
  return (
    <div>
        {
            persons.map(person => (
                <ul key={person.id}>
                    <li>{person.id}</li>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.skills}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default NameListThree