import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [text, setText] = useState('')
    return (
        <div className='parent' style={{backgroundColor:"green",
        }} >
            <h1>Parent Component</h1>
            <p>{text}</p>
            <Child setText={setText} />
        </div>
    )
}

export default Parent