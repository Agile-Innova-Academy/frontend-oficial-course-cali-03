import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import CircleIcon from '@mui/icons-material/Circle'
import { Box, Button, Typography } from '@mui/material'
import { APIURL, APIUSERS } from '../constants/urls'
import { patchData } from '../helpers/patchData'
import { UserContext } from '../context/userContext'

const CharacterDetail = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
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
    height: 'calc(100vh - 4rem)',
    ...theme.typography.body2,
    textAlign: 'center',
    padding: '2rem'
  }))

  // Hook para traer información del personaje seleccionado (con el useParams)
  useEffect(() => {
    const fetchAllCharacters = async () => {
      await fetch(`${APIURL}/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
    }

    fetchAllCharacters()
  }, [id])

  const fetchUserInfo = async () => {
    try {
      await fetch(`${APIUSERS}/${userInfo.id}`)
        .then(response => response.json())
        .then(data => setUserInfo(data))
    } catch (error) {
      console.error(error)
    }
  }

  // Función para añadir favorito
  const addFavorite = async () => {
    const newFavorites = {
      favorites: [...userInfo.favorites, character]
    }
    await patchData(APIUSERS, userInfo.id, newFavorites, 'patch').then(fetchUserInfo())
  }

  // Función para eliminar favorito
  const deleteFavorite = async () => {
    const currentFavorites = userInfo.favorites.filter(char => char.id != id)

    const newFavorites = {
      favorites: currentFavorites
    }

    await patchData(APIUSERS, userInfo.id, newFavorites, 'delete').then(fetchUserInfo())
  }

  return (
    <CharacterCard className='characterCard'>
      <Box>
        <img
          src={character?.image}
          alt='character'
          style={{
            width: '220px',
            borderRadius: '100%',
            border: '2px solid white',
            padding: '8px'
          }}
        />
      </Box>
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
      <Box mb={3}>
        <Button variant='contained' color='success' onClick={addFavorite}>
          Añadir a Favoritos
        </Button>
      </Box>
      <Box>
        <Button variant='contained' onClick={deleteFavorite}>
          Remover de Favoritos
        </Button>
      </Box>
    </CharacterCard>
  )
}

export default CharacterDetail
