import "./App.css";
import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) string += "0123456789";
    if(charAllowed) string += "!@#$%%^&*_+=[]{}~`";

    for(let i = 1; i <= length; i++) {
      let charInd = Math.floor (Math.random() * string.length + 1);
      pass = string.charAt(charInd);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-500'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-5">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          />

          <button className="outline-none bg-blue-400 text-white px-2 py-1">
            Copy
          </button>
        </div>
      </div>

      {/* <div className="bg-gray-500 rounded my-8 py-4 w-xl mx-auto">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          placeholder="Password" 
          className="outline-none w-full py-1 px-3 bg-white"
          readOnly />
        </div>
      </div> */}
    </>
  )
}

export default App
