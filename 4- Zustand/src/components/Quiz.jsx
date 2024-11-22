import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useQuizStore } from '../store/store'
import Questions from './Questions'

const Quiz = () => {
  const getAllQuestions = useQuizStore(state => state.getQuestions)
  const questions = useQuizStore(state => state.questions)
  const current = useQuizStore(state => state.currentQuestion)
  const score = useQuizStore(state => state.score)
  const [numeroPreguntas, setNumeroPreguntas] = useState(0)

  const questionData = questions[current]

  const handleStart = () => {
    getAllQuestions(numeroPreguntas)
  }

  return (
    <>
      {questions.length > 0 ? (
        <>
          <Questions data={questionData} />
          <Typography variant='h5'>Puntaje: {score}</Typography>
        </>
      ) : (
        <Box display='flex' flexDirection='column'>
          <TextField
            placeholder='Ingrese número de preguntas'
            onChange={event => setNumeroPreguntas(event.target.value)}
          />
          <Button variant='contained' onClick={handleStart}>
            Empezar Quiz
          </Button>
        </Box>
      )}
    </>
  )
}

export default Quiz
