import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormDataPerson } from './components/FormDataPerson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormDataPerson />
    </>
  )
}

export default App
