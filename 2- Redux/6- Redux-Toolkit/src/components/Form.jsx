import { Button, Paper, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import useForm from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/slices/userSlice'
import axios from 'axios'

const Form = () => {
  const user = useSelector(store => store.currentUser)
  const dispatch = useDispatch()

  const { formValues, handleInputChange, setFormValues } = useForm({
    email: user.email,
    first_name: '',
    last_name: '',
    avatar: ''
  })

  async function handleUserInfoChange (event) {
    event.preventDefault()
    // dispatch(updateUser({
    //   id: user.id,
    //   email: formValues.email,
    //   first_name: formValues.first_name,
    //   last_name: formValues.last_name,
    //   avatar: formValues.avatar, // Assuming avatar is a URL
    // }))
    await axios
      .patch(`https://reqres.in/api/users/${user.id}`, formValues)
      .then(response => console.log(response))
  }

  useEffect(() => {
    setFormValues({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar
    })
  }, [user])

  return (
    <Paper
      component='form'
      noValidate
      autoComplete='off'
      onSubmit={handleUserInfoChange}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1rem'
      }}
    >
      <TextField
        type='text'
        id='first_name'
        name='first_name'
        variant='outlined'
        label='Ingrese Nombre'
        onChange={handleInputChange}
        defaultValue={user.first_name}
        value={formValues.first_name}
      />
      <TextField
        type='text'
        id='last_name'
        name='last_name'
        variant='outlined'
        label='Ingrese Apellido'
        onChange={handleInputChange}
        value={formValues.last_name}
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
        type='text'
        id='avatar'
        name='avatar'
        variant='outlined'
        label='Ingrese url de la imagen'
        onChange={handleInputChange}
        value={formValues.avatar}
      />
      <Button variant='contained' type='submit'>
        Actualizar Datos
      </Button>
    </Paper>
  )
}

export default Form
