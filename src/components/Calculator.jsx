import { useState } from 'react'
import '../assets/Calculator.css'

const Calculator = () => {
    const [value, setValue] = useState("")

    const reset = () => {
        setValue("")
    }

    const erase = () => {
        setValue(value.slice(0, -1))
    }

    const evaluateExpression = () => {
        try {
          const evaluate = eval(value);
          setValue(evaluate.toString());
        } catch (error) {
          console.log(`error: ${error}`);
        }
      }
    return (
        <>
            <div className='container'>
                <div className='calculator'>
                    <div className='output'>
                        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    </div>
                    <div>
                        <button value="AC" onClick={reset}>AC</button>
                        <button value="DE" onClick={erase}>DE</button>
                        <button value="." onClick={e => setValue(value + e.target.value)}>.</button>
                        <button value="/" onClick={e => setValue(value + e.target.value)}>/</button>
                    </div>
                    <div>
                        <button value="7" onClick={e => setValue(value + e.target.value)}>7</button>
                        <button value="8" onClick={e => setValue(value + e.target.value)}>8</button>
                        <button value="9" onClick={e => setValue(value + e.target.value)}>9</button>
                        <button value="*" onClick={e => setValue(value + e.target.value)}>*</button>
                    </div>
                    <div>
                        <button value="4" onClick={e => setValue(value + e.target.value)}>4</button>
                        <button value="5" onClick={e => setValue(value + e.target.value)}>5</button>
                        <button value="6" onClick={e => setValue(value + e.target.value)}>6</button>
                        <button value="+" onClick={e => setValue(value + e.target.value)}>+</button>
                    </div>
                    <div>
                        <button value="1" onClick={e => setValue(value + e.target.value)}>1</button>
                        <button value="2" onClick={e => setValue(value + e.target.value)}>2</button>
                        <button value="3" onClick={e => setValue(value + e.target.value)}>3</button>
                        <button value="-" onClick={e => setValue(value + e.target.value)}>-</button>
                    </div>
                    <div>
                        <button value="00" onClick={e => setValue(value + e.target.value)}>00</button>
                        <button value="0" onClick={e => setValue(value + e.target.value)}>0</button>
                        <button value="=" onClick={() => evaluateExpression()}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
