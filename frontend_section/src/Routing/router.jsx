import React from 'react'
import Signup from '../Signup'
import Login from '../Login'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import Profile from '../userProfile/profile'
import CreateAlbum from '../album/createalbum'
import Memories from '../album/memories'
import EditProfile from '../userProfile/editprofile'
import CreateProfileComponent from '../userProfile/createprofile'
import  GetAlbum from '../album/getalbum'

const Router = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/editprofile" element={<EditProfile/>}/>
    <Route path="/userprofile" element={<Profile/>}/>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path="/creatememory" element={<Memories/>}/>
    <Route path="/create" element={<CreateProfileComponent/>}/>
    
    <Route path='/createalbum' element={<CreateAlbum/>}/>
    <Route path='/albums' element={<GetAlbum/>}/>
  </Routes>
  )
}

export default Router