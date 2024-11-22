import { create } from 'zustand'
import { endpointURL } from '../constants/constants'
import { devtools, persist } from 'zustand/middleware'

export const useQuizStore = create(
  devtools(
    persist(
      (set, get) => ({
        // bears: 0,

        // Initial State
        questions: [],
        currentQuestion: 0,
        score: 0,


        // Actions-Reducers
        getQuestions: async (number) => {
          const response = await fetch(endpointURL)
          const data = await response.json()
          const questions = data.record.questions

          const randomizedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, number)

          set({ questions: randomizedQuestions }, false, 'QUESTIONS_FETCHED')
        },

        answerSelection: (answerIndex) => {
          const clone = get().questions.map(questions => questions)
          const currentQuestion = get().questions[get().currentQuestion]

          clone[get().currentQuestion] = {
            ...currentQuestion,
            selectedAnswerIndex: answerIndex,
          }
          set({ questions: clone }, false, 'ANSWER_SELECTED')

          if (answerIndex === currentQuestion.answer) {
            clone[get().currentQuestion] = {
              ...currentQuestion,
              selectedAnswerIndex: answerIndex,
              isCorrect: true,
            }
            set({ questions: clone })
            set({ score: get().score + 1 })
          }
        },

        getNextQuestion: () => {
          const { questions, currentQuestion, score } = get()
          const nextQuestion = currentQuestion + 1

          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion }, false, 'NEXT_QUESTION')
          } else {
            alert("Juego Terminado. Tu puntuación fue " + score + "/" + questions.length)
            set({
              questions: [],
              currentQuestion: 0,
              score: 0,
            }, false, "RESET_QUIZ")
          }
        }

      }),
      {
        name: 'quizStore'
      }
    )
  )
)