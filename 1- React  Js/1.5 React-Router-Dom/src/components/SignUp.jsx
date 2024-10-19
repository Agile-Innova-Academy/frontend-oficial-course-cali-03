import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from '../hooks/useForm'
import { postData } from '../helpers/postData'
import { APIUSERS } from '../constants/urls'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const { formValues, handleInputChange, resetFormValues } = useForm({
    id: crypto.randomUUID(),
    name: '',
    email: '',
    password: '',
    favorites: []
  })

  const userSignUp = async (e) => {
    e.preventDefault()
    await postData(APIUSERS, formValues).then(navigate('/login'))
    resetFormValues()
  }

  return (
    <Paper component='div' sx={{ height: 'calc(100vh - 4rem)', textAlign: 'center', placeContent:'center', justifyContent:'center' }}>
      <Typography variant='h3'>
        Registro de Usuario
      </Typography>
      <Paper
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={userSignUp}
        sx={{ display: 'flex', flexDirection:'column', padding: '2rem', gap: '1rem' }}
      >
        <TextField
          type='text'
          id='name'
          name='name'
          variant='outlined'
          label='Ingrese Nombre'
          onChange={handleInputChange}
          value={formValues.name}
        />
        <TextField
          type='email'
          id='email'
          name='email'
          variant='outlined'
          label='Ingrese Email'
          onChange={handleInputChange}
          value={formValues.email}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          variant='outlined'
          label='Ingrese contraseña'
          onChange={handleInputChange}
          value={formValues.password}
        />
        <Button variant='outlined' type='submit'>Registrar</Button>
      </Paper>
    </Paper>
  )
}

export default SignUp
