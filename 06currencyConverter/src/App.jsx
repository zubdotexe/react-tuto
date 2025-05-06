import { useState, useEffect } from "react";
import { InputBox, Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import useCurrency from "./hooks/useCurrency";

// function App() {
//   const currencyObj = useCurrency("usd");
//   console.log(currencyObj);
//   const options = Object.keys(currencyObj);

//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("bdt");
//   const [amount, setAmount] = useState();
//   const [convertedAmount, setConvertedAmount] = useState(to);

//   function convert() {
//     setConvertedAmount(amount * currencyObj[to])
//   }

//   return (
//     <>
//       <form
//       onSubmit={e => {
//         e.preventDefault();
//         convert();
//       }}
//       >
//         <div>
//           <Input 
//           label="From" 
//           currencyOptions={options} 
//           amount={amount} 
//           onAmountChange={(val) => setAmount(val)}
//           onCurrencyChange={(currency) => setFrom(currency)}
//           ></Input>
//         </div>
//         <div>
//           <Input 
//           label="To" 
//           currencyOptions={options} 
//           amount={convertedAmount}
//           onCurrencyChange={(currency) => setTo(currency)}
//           ></Input>
//         </div>
//         <button
//         type="submit"
//         >Submit</button>
//       </form>
//     </>
//   );
// }

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo) // .map(key => key.toUpperCase());
  console.log('options', options)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
               />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-800"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
