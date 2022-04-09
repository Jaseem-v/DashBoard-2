import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/AppNavbar'
import AppNavbar from './components/AppNavbar'
import AppHeader from './components/header/AppHeader'
import HeaderUser from './components/header/HeaderUser'
import Mainarea from './components/mainarea/mainarea'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <div className="App">
      <AppHeader links={[{ link: "components", label: "components" }]} />
      <div className="mainarea">
        <AppNavbar />
        <Mainarea />

        {/* <h1>HI</h1> */}
      </div>
    </div>
  )
}

export default App
