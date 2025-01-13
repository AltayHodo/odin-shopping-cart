import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>E-Commerce Website</h1>
      <NavBar />
        <Outlet />
    </>
  )
}

export default App
