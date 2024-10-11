import React, { useEffect, useState } from 'react'
import { APIURL } from '../constants/urls'

const Footer = () => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const fetchCharactersInfo = async () => {
      try {
        const characters = fetch(`${APIURL}/character`)
          .then(response => response.json())
          .then(data => data.info.count)

        const episodes = fetch(`${APIURL}/episode`)
          .then(response => response.json())
          .then(data => data.info.count)

        const location = fetch(`${APIURL}/location`)
          .then(response => response.json())
          .then(data => data.info.count)

        const informacion = await Promise.all([characters, episodes, location])
        setInfo({
          charactersCount: informacion[0],
          episodesCount: informacion[1],
          locationsCount: informacion[2]
        })
      } catch (error) {
        console.error(error)
      }
    }

    fetchCharactersInfo()
  }, [])

  return (
    <ol>
      <li>{info.charactersCount}</li>
      <li>{info.episodesCount}</li>
      <li>{info.locationsCount}</li>
    </ol>
  )
}

export default Footer
