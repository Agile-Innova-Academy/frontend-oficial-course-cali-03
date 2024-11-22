import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'
import React from 'react'
import { useQuizStore } from '../store/store'

const Questions = ({ data }) => {
  const answerSelection = useQuizStore(state => state.answerSelection)
  const getNextQuestion = useQuizStore(state => state.getNextQuestion)
  const currentQuestion = useQuizStore(state => state.currentQuestion)
  const questions = useQuizStore(state => state.questions)

  const handleColor = index => {
    const { answer, selectedAnswerIndex } = data

    if (!selectedAnswerIndex) return 'transparent'
    if (index !== answer && index !== selectedAnswerIndex) return 'transparent'
    if (index === answer) {
      return '#0f0'
    } else {
      return '#f00'
    }
  }

  const handleOption = index => {
    answerSelection(index)
    handleColor(index)
    setTimeout(() => {
      getNextQuestion()
    }, 2500)
  }

  return (
    <Paper>
      <Typography p={2} variant='h5'>
        Pregunta {currentQuestion + 1} / {questions.length}
      </Typography>
      <Typography p={3} variant='h5'>
        {data.question}
      </Typography>
      <List>
        {data.options.map((option, index) => (
          <ListItem disablePadding key={index} divider>
            <ListItemButton
              onClick={() => handleOption(index)}
              sx={{ backgroundColor: handleColor(index) }}
              disabled={data.selectedAnswerIndex}
            >
              <ListItemText sx={{ textAlign: 'center' }} primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Questions
