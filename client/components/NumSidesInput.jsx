import React from 'react';
import { useEffect, useState } from 'react';

const NumSidesInput = (props) => {

  const [currentInput, setCurrentInput] = useState(0)

  const numSidesChangeHandler = (event) => {
    if (Number(event.target.value) > 1000) {
      alert('The largest dice in the world only has 1000 sides')
    } else {
      props.setNumSides(event.target.value)
      setCurrentInput(event.target.value)
    }
  }

  return (
    <div>
      <div># sides</div>
      <input type='number' onChange={numSidesChangeHandler} value={currentInput}></input>
    </div>
  )
}

export default NumSidesInput;

