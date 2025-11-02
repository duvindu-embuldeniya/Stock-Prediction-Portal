import React, { useContext } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import { AuthContext } from '../AuthContextComponent/AuthContextComponent'



const MainComponent = () => {

  const{isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  return (
    <>
        {/* <HeaderComponent /> */}

        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Welcome Back Alien..!</h1>
                <p className='text-light lead'>
                    In this stock prediction portal project, we are predicting the previous 30% of the data against the test data of the previous 30%, not the next day, next week, or next month’s price, because stock price movements are highly unpredictable and influenced by countless external factors. The model is trained on historical data and aims to identify patterns from the past, which helps to evaluate its performance based on known data rather than making uncertain future predictions. This approach allows us to assess the accuracy of the model in a controlled environment without the risk of inaccurate future forecasts.
                </p>
                
                {isLoggedIn ? (
                  <ButtonComponent url='/dashboard' text='Dashboard' class='btn-outline-info' />
                ) : (
                  <ButtonComponent url='/login' text='Login' class='btn-outline-info' />
                )}

            </div>
        </div>

        {/* <FooterComponent /> */}
    </>
  )
}

export default MainComponent