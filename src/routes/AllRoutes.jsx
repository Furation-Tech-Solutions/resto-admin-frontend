import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Forgotpassword from '../pages/Forgotpassword'
import Superadmin from '../pages/Superadmin'
import SingleAdmin from '../pages/SingleAdmin'
import Login from '../pages/Login'
import Feedback from '../pages/Feedback'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/superadmin' element={<Superadmin/>}></Route>
      <Route path='/superadmin/:id' element={<SingleAdmin/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  )
}

export default AllRoutes
