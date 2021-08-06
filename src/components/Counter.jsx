import React from 'react'
import { useState } from 'react'


const Counter = () => {

    const[counter, setCounter] = useState(0)
    const[inpVal, setInpVal] = useState(0)

    return (
        <div>
            <p>{counter}</p>
            <div>
                <input onChange={(e) => setInpVal(parseInt(e.target.value))} placeholder="Numeric Value"></input>
            </div>
            <div>
                <button onClick={() => setCounter(counter + inpVal)}>Increment by {inpVal}</button>
                <button onClick={() => setCounter(counter - inpVal)}>Decrement by {inpVal}</button>
            </div>

            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
            

        </div>
    )
}

export default Counter





