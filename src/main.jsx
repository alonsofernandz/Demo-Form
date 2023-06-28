import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormLabolData } from './components/FormLaboData'
import './index.css'
import { Boton } from './components/Buttons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormLabolData />
    <Boton children={"prueba"}/>
  </React.StrictMode>,
)
