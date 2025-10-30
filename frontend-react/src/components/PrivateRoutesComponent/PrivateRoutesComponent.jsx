import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContextComponent/AuthContextComponent'
import {Navigate} from 'react-router-dom'


const PrivateRoutesComponent = ({children}) => {

  const{isLoggedIn} = useContext(AuthContext)

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' />
  )


}

export default PrivateRoutesComponent