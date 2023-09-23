import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const isAuth= useSelector((store)=>store.AuthReducer.isAuth);
  console.log(isAuth);

  if(isAuth===false){
    <Navigate to="/login" />
  }return children
}

export default PrivateRoute
