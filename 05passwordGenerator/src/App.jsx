import "./App.css";
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) string += "0123456789";
    if(charAllowed) string += "!@#$%%^&*_+=[]{}~`";

    for(let i = 1; i <= length; i++) {
      let charInd = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(charInd);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])
  
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);

    setCopied(true);
    // console.log(copied);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000)
  }, [password, setCopied])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-700 text-orange-600'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-5">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />

          <button 
            className="outline-none bg-blue-400 text-white px-2 py-1 cursor-pointer"
            onClick={copyPasswordToClipboard}
            onAnimationEnd={() => setCopied(false)}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="grid grid-cols-[220px_100px_100px] text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={40}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={
                () => {
                  setNumAllowed((prev) => !prev);
                }
              }
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={
                () => {
                  setCharAllowed((prev) => !prev);
                }
              }
            />
            <label>Characters</label>
          </div>
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
