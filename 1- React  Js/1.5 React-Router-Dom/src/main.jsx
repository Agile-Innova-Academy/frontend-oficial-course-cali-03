import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppRouter from './routes/AppRouter.jsx'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00f',
    },
    warning: {
      main: '#0f0'
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252',
    },
  },
})

const theme = createTheme({
  colorSchemes: {
    dark: darkTheme,
    light: lightTheme,
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </ThemeProvider>
)
