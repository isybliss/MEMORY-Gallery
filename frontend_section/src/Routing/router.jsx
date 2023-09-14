import React from 'react'
import Signup from '../Signup'
import Login from '../Login'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import Profile from '../userProfile/profile'
const Router = () => {
  return (
    <Routes>
        <Route path="/userprofile" element={<Profile/>}/>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/' element={<Home />}></Route>
  </Routes>
  )
}

export default Router