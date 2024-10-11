import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import CircleIcon from '@mui/icons-material/Circle'
import { Box, Typography } from '@mui/material'

const CharacterCard = ({ character }) => {
  console.log(character)
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 600,
    height: 220,
    ...theme.typography.body2,
    textAlign: 'center',
    display: 'flex'
  }))

  const [episodeName, setEpisodeName] = useState('')
  const episodeURL = character.episode[character.episode.length - 1]

  useEffect(() => {
    const fetchEpisode = async () => {
      await fetch(episodeURL)
       .then((response) => response.json())
       .then((data) => setEpisodeName(data.name))
    }

    fetchEpisode()
  }, [])

  return (
    <DemoPaper className='characterCard' square={false} elevation='2'>
      <img src={character.image} alt='character' style={{ width: '220px' }} />
      <Box textAlign='left' ml={1}>
        <h2>{character.name}</h2>
        <Box>
        <CircleIcon
          width='8px'
          color={
            character.status === 'Alive'
              ? 'success'
              : character.status === 'Dead'
              ? 'error'
              : 'primary'
          }
        />
        {character.status} - {character.species}
        </Box>
       
        <Typography variant='h6' sx={{color: '#9e9e9e'}}>Last known location</Typography>
        <Typography variant='h6'>{character.location.name}</Typography>
        <Typography variant='h6' sx={{color: '#9e9e9e'}}>First seen in</Typography>
        <Typography variant='h6'>{episodeName}</Typography>
      </Box>
    </DemoPaper>
  )
}

export default CharacterCard
