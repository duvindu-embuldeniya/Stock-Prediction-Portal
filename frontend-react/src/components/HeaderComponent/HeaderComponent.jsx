import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthContextComponent/AuthContextComponent';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {

  const{isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  let handleLogout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">
                Stock Prediction Portal</Link>

            <div>
                

                {isLoggedIn ? (
                  <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
                ) : (
                  <>
                  <ButtonComponent url='/login' text='login' class='btn-outline-info'/>
                  &nbsp;
                  <ButtonComponent url='/register' text='register' class='btn-info'/>
                  </>
                )}

            </div>
        </nav>
    </>
  )
}

export default HeaderComponent