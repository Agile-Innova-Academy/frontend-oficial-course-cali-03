import React, { useEffect, useState } from 'react'
import { APIURL } from '../constants/urls'
import CharacterCard from './CharacterCard'
import { Box, Stack, Pagination } from '@mui/material'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchAllCharacters = async () => {
      await fetch(`${APIURL}/character`)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }

    fetchAllCharacters()
  }, [])

  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} color='primary' />
      </Stack>

      <Box padding='1rem' gap={'1rem'} display='flex' flexWrap='wrap'>
        {characters?.map(character => (
          <CharacterCard character={character} />
        ))}
      </Box>
    </>
  )
}

export default Characters
