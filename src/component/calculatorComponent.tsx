import React, { Component } from "react";
interface IState  {
    num1: Number,
    num2: Number,
    result: Number
}
// interface IProps  {
// }
// export default SumValueComponent;
export default class CalculatorComponent extends Component <any, any> {
    constructor(props:any) {
        super(props)
        this.state = {
            num1:Number, num2:Number , result:Number
        }
    }
    _addValue = (event:any) => {
        let name = event.target.name;
        let value1 = document.getElementById("number1")

        this.setState({ [name] : event.target.value })
        // this.setState({num2: event.target.value})
    }
    /**
     * 
     * @param type Perform operation Add, Multiply, Subtract and Divide
     */
    _calculator(type: string = 'add') {
        switch (type) {
            case 'add': {
                this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
                break;
            }
                case 'multiply': {
                this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
                break;
            }
            case 'subtract': {
                this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
                break;
            }
            case 'divide': {
                if (parseInt(this.state.num2) !== 0) {
                    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
                } else {
                    this.setState({ result: 'Divider can not be zero' });
                }
                break;
            }
        }
    }

    render() {
        const { num1, num2 } = this.state;
         return ( <>
             <h1>Arithmetic Operation</h1>
             <p>Enter two value for arithmetic operation</p>
             <input type="number" name="num1" id="number1" value={num1} onChange={this._addValue} />
             <input type="number" name="num2" id="number2" value={num2} onChange={this._addValue} />
             <div>
                <button onClick={() => { this._calculator('add') }} >Add Numbers</button>
             <button onClick={() => { this._calculator('multiply') }} >Multiply Numbers</button>
             <button onClick={() => { this._calculator('subtract') }} >Subtract Numbers</button>
             <button onClick={() => { this._calculator('divide') }} >Dived Numbers</button>
             </div>
             <div>
                The result of two value is {this.state.result}
             </div>
             
             
         </>
         )
    }
}