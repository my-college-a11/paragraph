import React, { useState } from 'react'
import data from './component/data'
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([data]);
  const handleSubmit = (e) =>{
    e.preventDefault()

    let amount = parseInt(count);

    if (count <= 0){
      amount = 1;
    }
    if(count > 12){
      amount = 12;
    }
    setText(data.slice(0,amount))
  }

  return (
    <>
    <section className='section-center'>
      <h3>Generate Pharagraph</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type='number'
        name='amount'
        id='amount'
        value={count}
        onChange={ (e)=> setCount(e.target.value)}
        />
        <button className='btn'>Generate</button>
      </form>
      <article>
        {
          text.map((item,index) =>{
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
    </>
  )
}

export default App