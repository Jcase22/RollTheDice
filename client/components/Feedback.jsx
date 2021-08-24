import React from 'react';
import {useEffect, useState} from 'react';

const Feedback = (props) => {

  const [text, setText] = useState('')

  const changeHandler = (event) => {
    setText(event.target.value)
  }

  const submitHandler = () => {

  }

  return (
    <form>
      <input type='text' onChange={changeHandler}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}