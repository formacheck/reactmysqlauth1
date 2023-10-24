import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import './App.css'

function App() {


  return (
    <>

      <div>

        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>


      </div>

    </>
  )
}

export default App
