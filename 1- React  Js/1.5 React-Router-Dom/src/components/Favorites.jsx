import React, { useContext, useEffect, useState } from 'react'
import { APIUSERS } from '../constants/urls'
import CharacterCard from './CharacterCard'
import { Box, Stack, Pagination, Paper } from '@mui/material'
import { UserContext } from '../context/userContext'

const Favorites = () => {
  const { userInfo } = useContext(UserContext)
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      await fetch(`${APIUSERS}/${userInfo.id}`)
        .then(response => response.json())
        .then(data => {
          setCharacters(data.favorites)
        })
    }

    fetchUserInfo()
  }, [currentPage])

  return (
    <Paper
      sx={{
        borderRadius: '0px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem'
      }}
    >
      <Stack spacing={2} justifyContent='center' display='flex'>
        <Pagination
          count={pages}
          color='primary'
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>

      <Box
        padding='1rem'
        gap={'1rem'}
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
      >
        {characters?.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </Box>
    </Paper>
  )
}

export default Favorites
