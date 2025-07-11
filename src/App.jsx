import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  
  const [amount,setAmount] = useState(0)
  const [from ,setFrom] = useState("usd")
   const [to ,setTo] = useState("inr")
   const [convertedAmount,setConvertedAmount] = useState(0)
   

   const currencyInfo = useCurrencyInfo(from)


   const option = Object.keys(currencyInfo) // will obtain all the currency data
  
   const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }
   const convert = () =>{
     setConvertedAmount (amount*currencyInfo[to])
    }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://wallpapers.com/images/hd/finance-background-lmbrnieyixwr61g9.jpg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={option}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
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
                                currencyOptions={option}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <div >
                          <button type="submit" className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg">
                            CONVERT {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
