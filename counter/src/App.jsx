import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter]=useState(0)

const addValue=()=>{
  if(counter<20)
  setCounter(++counter)//prevent any above 20
}

const removeValue=()=>{
  if(counter>0)
  setCounter(--counter)//futurework prevent -ve values
}

  return (
    <>
      <h1>React Series Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
