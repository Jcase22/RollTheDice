import React from 'react';

const NumSidesInput = (props) => {

  const numSidesChangeHandler = (event) => {
    props.setNumSides(event.target.value)
  }

  return (
    <div>
      <div># sides</div>
      <input type='number' onChange={numSidesChangeHandler}></input>
    </div>
  )
}

export default NumSidesInput;