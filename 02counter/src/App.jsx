import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(++counter);  // the method takes the new value to updated
    console.log("value added", counter);
  }

  const reduceValue = () => {
    setCounter(counter - 1);
    console.log("value reduced", counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={reduceValue}
      >Remove Value</button>

      <div>Counter Value: {counter}</div>
      <p>{counter}</p>
    </>
  )
}

export default App
