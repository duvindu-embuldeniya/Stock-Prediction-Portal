import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">
                Stock Prediction Portal</Link>

            <div>
                <ButtonComponent url='/login' text='login' class='btn-outline-info'/>
                &nbsp;
                <ButtonComponent url='/register' text='register' class='btn-info'/>

            </div>
        </nav>
    </>
  )
}

export default HeaderComponent