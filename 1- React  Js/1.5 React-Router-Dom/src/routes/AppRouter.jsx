import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Dashboard from './Dashboard'
import Private from './Private'

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route path='/signup' element={<SignUp />} />

        {/* Rutas Privadas */}
        <Route
          path='/*'
          element={
            <Private isAuthenticated={isLoggedIn}>
              <Dashboard />
            </Private>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
