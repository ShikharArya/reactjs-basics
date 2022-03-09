import React, {useState} from 'react'

function CounterHook() {
    //console.log(useState(0))
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button className='btn btn-primary' onClick={() => addCount()}>Add Count</button>
        </div>
    )
}

export default CounterHook