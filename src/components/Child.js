import React from 'react'

const Child = ({setText}) => {
  return (
    <div style={{backgroundColor:"orange"}} >
        <h2>Child Component</h2>
        <input type="text" onChange={e=>setText(e.target.value)} />
    </div>
  )
}

export default Child