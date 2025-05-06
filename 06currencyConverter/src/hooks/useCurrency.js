import { useState, useEffect } from "react";


function useCurrency(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => {
            console.log(currency)
            return setData(res[currency])});
    }, [currency]);

    return data;
}

export default useCurrency;