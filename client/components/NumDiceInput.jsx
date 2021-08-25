import React from 'react';
import {useEffect, useState} from 'react';

const NumDiceInput = (props) => {

  const [currentInput, setCurrentInput] = useState(0)

  const numDiceChangeHandler = (event) => {
    if (Number(event.target.value) > 512) {
      alert('Why do you need so many dice?')
    } else {
      props.setNumDice(event.target.value)
      setCurrentInput(event.target.value)
    }
  }

  return (
    <div>
      <div># dice</div>
      <input type='number' onChange={numDiceChangeHandler} value={currentInput}></input>
    </div>
  )
}

export default NumDiceInput;