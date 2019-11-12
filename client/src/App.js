import React, { useEffect, useState } from "react";
import axios from "axios";

import IndicativePresent from './components/IndicativePresent'
import "./App.css";

function App() {
  const [verbs, setVerbs] = useState();
  const [answers, setAnswers] = useState({
    answerInput: ''
  })

  useEffect(() => {
    axios
      .get(`http://localhost:5555`)
      .then(res => {
        setVerbs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!verbs) {
    return <h2>Loading...</h2>
  }

  const handleChange = e => {
    setAnswers({ [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setAnswers({ answerInput: '' })
  }

  const indicative = verbs.filter(item => item.mood === 'Indicativo')
  const indPresent = indicative.filter(item => item.tense === 'Presente')


  return (
    <div className="App">
      <IndicativePresent indPresent={indPresent} />
      <form className='answerForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='answerInput'
          className='answerInput'
          value={answers.answerInput}
          onChange={handleChange}
        />
        <button className='answerInput'>Submit!</button>
      </form>
    </div>
  )

}

export default App;
