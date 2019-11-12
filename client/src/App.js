import React, { useEffect, useState } from "react";
import axios from "axios";

import IndicativePresent from './components/IndicativePresent'
import "./App.css";

function App() {
  const [verbs, setVerbs] = useState();
  const [currentQ, setCurrentQ] = useState()
  const [totalQs, setTotalQs] = useState(0)
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

  const checkAnswer = () => {
    if (answers.answerInput === currentQ) {
      setTotalQs(totalQs + 1)
    }
  }

  const handleChange = e => {
    setAnswers({ [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setAnswers({ answerInput: '' })
    checkAnswer()
  }

  //filters to seperate the mood/tense to break up the questions into difficulty
  const indicative = verbs.filter(item => item.mood === 'Indicativo')
  const indPresent = indicative.filter(item => item.tense === 'Presente')



  return (
    <div className="App">
      <IndicativePresent setCurrentQ={setCurrentQ} totalQs={totalQs} indPresent={indPresent} />
      {totalQs}
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
