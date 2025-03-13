import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);  // the method takes the new value to updated
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      console.log("value added", counter);
    } 
    else {
      alert('The value can\'t be greater than 20');
    }

  }

  const reduceValue = () => {
    if(counter == 0) {
      alert('The value can\'t be less than 0');
    } 
    else {
      setCounter(counter - 1);
      console.log("value reduced", counter);
    }
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
