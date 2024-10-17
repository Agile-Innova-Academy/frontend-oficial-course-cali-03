import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import CircleIcon from '@mui/icons-material/Circle'
import { Box, Typography } from '@mui/material'
import { APIURL } from '../constants/urls'

const CharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState({
    name: '',
    image: '',
    status: '',
    species: '',
    type: '',
    location: {
      name: ''
    }
  })
  const CharacterCard = styled(Paper)(({ theme }) => ({
    width: 600,
    height: 220,
    ...theme.typography.body2,
    textAlign: 'center',
    display: 'flex',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer'
  }))

  useEffect(() => {
    const fetchAllCharacters = async () => {
      await fetch(`${APIURL}/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
    }

    fetchAllCharacters()
  }, [id])

  return (
    <CharacterCard className='characterCard'>
      <img src={character?.image} alt='character' style={{ width: '220px' }} />
      <Box textAlign='left' ml={1}>
        <h2>{character?.name}</h2>
        <Box>
          <CircleIcon
            width='8px'
            color={
              character?.status === 'Alive'
                ? 'success'
                : character?.status === 'Dead'
                ? 'error'
                : 'primary'
            }
          />
          {character?.status} - {character?.species}
        </Box>

        <Typography variant='h6' sx={{ color: '#9e9e9e' }}>
          Last known location
        </Typography>
        <Typography variant='h6'>{character?.location.name}</Typography>
        <Typography variant='h6' sx={{ color: '#9e9e9e' }}>
          First seen in
        </Typography>
        {/* <Typography variant='h6'>{episodeName}</Typography> */}
      </Box>
    </CharacterCard>
  )
}

export default CharacterDetail
