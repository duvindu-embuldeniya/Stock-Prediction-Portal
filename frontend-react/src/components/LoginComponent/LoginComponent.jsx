import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContextComponent/AuthContextComponent'

const LoginComponent = () => {

  const{isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState('')

  const navigate = useNavigate()

  let f1 = (e) => {
    setUsername(e.target.value)
  }

  let f2 = (e) => {
    setPassword(e.target.value)
  }

  let handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userData = {
      username, password
    }
    try{
      const response = await axios.post('http://localhost:8000/api/v1/token/', userData)
      localStorage.setItem('access', response.data.access)
      localStorage.setItem('refresh', response.data.refresh)
      setIsLoggedIn(true)
      navigate('/')
    }
    catch(error){
      setError("Invalid Credentials")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
       <div className='container'> 
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'>Login to our Portal</h3>

                <form onSubmit={handleLogin}>
                    
                    <div className=' mb-3'>
                        <input type="text" required onChange={f1} value={username} className='form-control' placeholder='Username'/>
                        <small>
                        </small>
                    </div>


                    <div className=' mb-3'>
                        <input type="password" required onChange={f2} value={password} className='form-control' placeholder='Password'/>
                        <small>
                        </small>
                    </div>
                    {error && <div style={{textAlign:'center'}} className='alert alert-danger'>{error}</div>}


                    {loading ? (
                        <button disabled type='submit' className='btn btn-info d-block mx-auto'>Please wait..</button>
                    ) : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                    )}
                </form>
            </div>
        </div>
       </div>
    </>
  )
}

export default LoginComponent