import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography } from '@mui/material'
import Quiz from './components/Quiz'

function App() {

  return (
    <>
      <Typography variant='h3'>Bienvenidos a mi primer QUIZ de JavaScript</Typography>
      <Quiz />
    </>
  )
}

export default App
