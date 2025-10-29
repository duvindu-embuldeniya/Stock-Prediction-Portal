import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'


const MainComponent = () => {
  return (
    <>
        {/* <HeaderComponent /> */}

        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Welcome Back Alien..!</h1>
                <p className='text-light lead'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam modi aliquid cupiditate laborum molestias eius odit reiciendis consequuntur provident, quaerat illum enim tempora beatae dolor error nihil temporibus delectus quibusdam?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nulla laborum enim ab impedit adipisci ad aspernatur assumenda culpa maiores ut molestiae dicta, consectetur natus distinctio temporibus exercitationem placeat accusamus.
                </p>

                <ButtonComponent url='/login' text='Login' class='btn-outline-info' />

            </div>
        </div>

        {/* <FooterComponent /> */}
    </>
  )
}

export default MainComponent