import React, { useEffect, useState } from 'react'
import { APIURL } from '../constants/urls'
import CharacterCard from './CharacterCard'
import { Box, Stack, Pagination, Paper } from '@mui/material'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    const fetchAllCharacters = async () => {
      await fetch(`${APIURL}/character/?page=${currentPage}`)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }

    fetchAllCharacters()
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
          count={10}
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
        {characters?.map(character => (
          <CharacterCard character={character} />
        ))}
      </Box>
    </Paper>
  )
}

export default Characters
