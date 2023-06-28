import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormLabolData } from './components/FormLaboData'
import './index.css'
import { FormOtrosDatos } from './components/FormOtrosDatos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormOtrosDatos />
  </React.StrictMode>,
)
