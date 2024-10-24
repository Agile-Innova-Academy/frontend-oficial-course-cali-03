import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRouters = ({children}) => {
    const {state} = useContext(AuthContext)
  return state?.logged === false ? children : <Navigate to="/*"/>
}

export default PublicRouters