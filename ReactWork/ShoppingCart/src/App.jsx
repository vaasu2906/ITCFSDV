// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Registeration from './component/Registeration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'

function App() {

  return (
    <>
      {/* <h2>WELCOME TO SHOPPING CART</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registeration/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<MainLayout/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
