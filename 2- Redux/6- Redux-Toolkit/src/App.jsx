import { useEffect, useState } from 'react'
import './App.css'
import UserInfo from './components/userInfo'
import Form from './components/Form'
import { Pagination, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/slices/userSlice'

function App () {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(0)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://reqres.in/api/users')
      const data = await response.json()
      setUsers(data.data.length)
    }

    fetchUsers()
  }, [])

  async function handleUserSelection(event, value) {
    const user = await fetch(`https://reqres.in/api/users/${value}`)
    const userData = await user.json()
    dispatch(getUser(userData.data))
  }

  useEffect(() => {
    handleUserSelection(null, 1)
  }, [])

  return (
    <>
      <Stack spacing={2}>
        <Pagination count={users} color='primary' onChange={handleUserSelection} />
      </Stack>

      <UserInfo />
      <Form />
    </>
  )
}

export default App
