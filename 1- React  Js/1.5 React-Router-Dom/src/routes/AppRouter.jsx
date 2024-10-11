import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import Locations from '../components/Locations'
import Favorites from '../components/Favorites'
import CharacterDetail from '../components/CharacterDetail'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/character/:id' element={<CharacterDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
