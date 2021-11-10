import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CalculatorComponent from './component/calculatorComponent'
import MyFunc from './component/FuncComponent'
import HomePage from './component/listRender'
import Card from './component/google-meet-layout/card-layout/Card'
import CardList from './component/google-meet-layout/card-list/CardList'

ReactDOM.render(
    <React.StrictMode>
        {/* <CalculatorComponent />
        <MyFunc /> */}
        {/* <HomePage /> */}
        {/* <Card /> */}
        <CardList />
  </React.StrictMode>,
  document.getElementById('root')
)
