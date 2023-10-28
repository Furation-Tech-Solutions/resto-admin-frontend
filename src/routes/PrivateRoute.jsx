import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const isAuth= useSelector((store)=>store.AuthReducer.isAuth);

  if(isAuth==false){
    return <Navigate to="/login" />
  } else {
    return children
  }
}

export default PrivateRoute
