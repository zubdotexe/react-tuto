import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let userObj = {
    name: 'Hannah',
    age: 21
  };

  let userArr = [
    'name', 'Hannah', 'age', 21
  ];

  return (
    <>
      <h1 className="bg-green-400 text-blue-800 p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username='Hannah' btnText='Hi'/>
      <Card username='Mike' />
    </>
  );
}

export default App;
