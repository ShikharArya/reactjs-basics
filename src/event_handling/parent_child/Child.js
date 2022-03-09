import React from 'react'

function Child(props) {
  return (
    <div>
        <button className='btn btn-primary' onClick={() => props.callParent()}>Call Parent</button>
    </div>
  )
}

export default Child