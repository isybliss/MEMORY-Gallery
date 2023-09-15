import React from 'react'
import Signup from '../Signup'
import Login from '../Login'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import Profile from '../userProfile/profile'
import CreateAlbum from '../album/createalbum'
import Memories from '../album/memories'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/userprofile" element={<Profile/>}/>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path="/memory" element={<Memories/>}/>
    
    <Route path='/createalbum' element={<CreateAlbum/>}/>
  </Routes>
  )
}

export default Router