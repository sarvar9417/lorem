import React, { useState } from 'react';
import data from './data'
function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const changeHandler = (e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    if(amount <= 0) amount = 1;
    if(amount > 9) amount = 10;
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h2>Tired of boring lorem ipsum?</h2>
      <form onSubmit={changeHandler} className="lorem-form">
        <label className="amount">paragraphs:</label>
        <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
        <button className="btn" type="submit" >generate</button>
      </form>
      <article className="lorem-text">
        {text.map((matn, index)=>{
          return <p key = {index}>{matn}</p>
        })}
      </article>
    </section>
  );
}

export default App;
