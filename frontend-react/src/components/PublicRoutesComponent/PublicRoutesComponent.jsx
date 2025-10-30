import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContextComponent/AuthContextComponent'
import {Navigate} from 'react-router-dom'

const PublicRoutesComponent = ({children}) => {

  const{isLoggedIn} = useContext(AuthContext)

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to="/dashboard" />
  )
}

export default PublicRoutesComponent