import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {

  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[errors, setErrors] = useState({})
  const[success, setSuccess] = useState(false)
  const[loading, setLoading] = useState(false)

  const navigate = useNavigate()

  let f1 = (e) => {
    setUsername(e.target.value)
  }

  let f2 = (e) => {
    setEmail(e.target.value)
  }

  let f3 = (e) => {
    setPassword(e.target.value)
  }

  let handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userData = {
        username, email, password
    }
    try{
        const response = await axios.post('http://localhost:8000/api/v1/register/', userData)
        setErrors({})
        setSuccess(true)
        // navigate('/')
        setUsername('')
        setEmail('')
        setPassword('')
    }
    catch(error){
        setErrors(error.response.data)
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
                <h3 className='text-light text-center mb-4'>Create an Account</h3>

                <form onSubmit={handleRegistration}>
                    
                    <div className=' mb-3'>
                        <input type="text" required onChange={f1} value={username} className='form-control' placeholder='Username'/>
                        <small>
                            {errors.username && <div className='text-danger'>{errors.username}</div>}
                        </small>
                    </div>

                    <div className=' mb-3'>
                        <input type="email" required onChange={f2} value={email} className='form-control' placeholder='Email address'/>
                        <small>
                            {errors.email && <div className='text-danger'>{errors.email}</div>}
                        </small>
                    </div>

                    <div className=' mb-3'>
                        <input type="password" required onChange={f3} value={password} className='form-control' placeholder='Password'/>
                        <small>
                            {errors.password && <div className='text-danger'>{errors.password}</div>}
                        </small>
                    </div>
                    {success && <div style={{textAlign:'center'}} className='alert alert-success'>Registration Success, now login with your details</div>}

                    {loading ? (
                        <button disabled type='submit' className='btn btn-info d-block mx-auto'>Please wait..</button>
                    ) : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                    )}
                </form>
            </div>
        </div>
       </div>
    </>
  )
}

export default RegisterComponent