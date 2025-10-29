import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const HeaderComponent = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light' href="#">
                Stock Prediction Portal</a>

            <div>
                <ButtonComponent text='login' class='btn-outline-info'/>
                &nbsp;
                <ButtonComponent text='register' class='btn-info'/>
            </div>
        </nav>
    </>
  )
}

export default HeaderComponent