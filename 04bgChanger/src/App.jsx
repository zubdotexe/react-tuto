import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded-2xl px-2 py-2"
        // style={{ backgroundColor: "#fcfaec" }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/50 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
