import React from 'react';
import { useEffect, useState } from 'react';

const Feedback = (props) => {

  const [text, setText] = useState('')

  const changeHandler = (event) => {
    setText(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    var axios = require('axios');
    var data = JSON.stringify({
      "message": text
    });

    var config = {
      method: 'post',
      url: 'http://localhost:3000/feedback',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setText('')
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <form onSubmit={submitHandler} className='feedback-form'>
      <div className='text'>Send Me Some Feedback!</div>
      <input type='text' onChange={changeHandler} value={text}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Feedback