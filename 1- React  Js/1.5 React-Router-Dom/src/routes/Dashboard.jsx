import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import Locations from '../components/Locations'
import Favorites from '../components/Favorites'
import CharacterDetail from '../components/CharacterDetail'

const Dashboard = ({}) => {
  return (
    <Routes>
      <Route path='/characters' element={<Characters />} />
      <Route path='/episodes' element={<Episodes />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/character/:id' element={<CharacterDetail />} />
    </Routes>
  )
}

export default Dashboard
