import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Forgotpassword from '../pages/Forgotpassword'
import Superadmin from '../pages/Superadmin'
import SingleAdmin from '../pages/SingleAdmin'
import Login from '../pages/Login'
import Feedback from '../pages/Feedback'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/superadmin' element={<PrivateRoute><Superadmin/></PrivateRoute>}></Route>
      <Route path='/superadmin/:id' element={<PrivateRoute><SingleAdmin/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes
