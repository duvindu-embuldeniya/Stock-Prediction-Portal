import React, { createContext } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()


const AuthContextComponent = ({children}) => {

    const[isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('access')
    )

  return (
    <>
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthContextComponent