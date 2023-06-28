import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FormContact } from './components/FormContact'
import MiComponente from './components/FormPerfil'
import { Boton } from './components/Buttons'
import { FormDataPerson } from './components/FormDataPerson'
import { FormLabolData } from './components/FormLaboData'
import { FormOtrosDatos } from './components/FormOtrosDatos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='container m-2'>
      <MiComponente />
      <Boton/>
      <FormDataPerson/>
    </div>

    
    <div className='container m-2'>
      <MiComponente />
      <Boton/>
      <FormContact/>
    </div>

    
    <div className='container m-2'>
      <MiComponente />
      <Boton/>
      <FormLabolData/>
    </div>

    <div className='container m-2'>
      <MiComponente />
      <Boton/>
      <FormOtrosDatos/>
    </div>


    
  </React.StrictMode>,
)
