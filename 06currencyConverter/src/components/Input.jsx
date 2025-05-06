import { useId } from "react";

function Input({
    label,
    amount,
    currencyOptions=[],
    onAmountChange,
    onCurrencyChange,
}) {
    const amountInputID = useId();

    return (
        <>
            <div className="bg-cyan-700 rounded-xl p-4 flex justify-between">
                <div>
                    <label 
                    htmlFor={amountInputID}
                    className="text-cyan-200 inline-block mb-2"
                    >{label}</label>
                    
                    <input
                    id={amountInputID}
                    type="number"
                    placeholder="Amount"
                    min="0"
                    max="10000000"
                    value={amount}
                    className="outline-none w-full py-1.5 text-cyan-300"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div>
                    <p
                    className="text-cyan-200 mb-2"
                    >Currency Type</p>
                    <select
                    className="py-1.5 outline-none bg-cyan-600 rounded-xl text-cyan-200"
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        {
                            currencyOptions.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default Input;