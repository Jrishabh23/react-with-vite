import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import BtnC, { ButtonArrowComponent } from './component/ButtonComponent'

ReactDOM.render(
    <React.StrictMode>
        <BtnC></BtnC>
        <ButtonArrowComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
