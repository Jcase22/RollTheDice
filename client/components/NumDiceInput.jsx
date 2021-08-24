import React from 'react';

const NumDiceInput = (props) => {

  const numDiceChangeHandler = (event) => {
    props.setNumDice(event.target.value)
  }

  return (
    <div>
      <div># dice</div>
      <input type='number' onChange={numDiceChangeHandler}></input>
    </div>
  )
}

export default NumDiceInput;