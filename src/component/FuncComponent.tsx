import { useState } from "react";

function MyFunc() {
    const [num1, num1Setter] = useState("")
    const [ num2, num2Setter ] = useState("")
    const [result, resultSetter] = useState(0)
    const addNumber = () => {
        const sum = Number(num1) + Number(num2);
        resultSetter(sum);
    }
    return <>
        <p>My Result </p>
        <div className="result">
            <p>Result: {result}</p>
        </div>
        <div className="row">
            <div className="fromGroup">
                <label htmlFor="">First Number</label>
                <div>
                    <input type="number" value={num1} name="firstNumber" onChange={(any) => {
                        num1Setter(any.target.value)
                    } } placeholder="Enter First number"/>
                </div>
            </div>
            <div className="fromGroup">
                <label htmlFor="">Second Number</label>
                <div>
                    <input type="number" value={num2} name="secondNumber" onChange={(any) => {
                        num2Setter(any.target.value)
                    } } placeholder="Enter Second number"/>
                </div>
            </div>
            <div className="form-group">
                <button onClick={addNumber}>Submit</button>
            </div>
        </div>
    </>
}

export default MyFunc;