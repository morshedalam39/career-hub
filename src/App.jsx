import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Headers from './components/Headers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-10/12 mx-auto">
      <Headers></Headers>
      <Outlet></Outlet>
     
    </div>
  )
}

export default App
