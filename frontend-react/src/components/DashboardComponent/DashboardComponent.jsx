import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'
import { useState } from 'react'

const DashboardComponent = () => {

  const[ticker, setTicker] = useState('')
  const[error,setError] = useState('')
  const[loading, setLoading] = useState(false)
  const[plot, setPlot] = useState()
  const[ma100, setMA100] = useState()
  const[ma200, setMA200] = useState()
  const[prediction, setPrediction] = useState()
  const[mse, setMSE] = useState()
  const[rmse, setRMSE] = useState()
  const[r2, setR2] = useState()

  

  let f1 = (e) => {
    setTicker(e.target.value)
  }

  useEffect(() => {
    const fetchResponseData = async () =>{
        try{
            const response = await axiosInstance.get('/api/v1/protected-view/')
            // console.log("Success -> ", response.data)
        }
        catch(error){
            // console.log("Error ->",error.response.data)
        }
    }
    fetchResponseData()
  },[])



  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const response = await axiosInstance.post('/api/v2/predict/',{
        ticker:ticker
      })
      // console.log(response.data)

      // set plots
      const backendRoot = 'http://localhost:8000'
      const plotUrl = `${backendRoot}${response.data.plot_img}`
      const ma100url = `${backendRoot}${response.data.plot_100_dma}`
      const ma200url = `${backendRoot}${response.data.plot_200_dma}`
      const predictionUrl = `${backendRoot}${response.data.plot_prediction}`

      setPlot(plotUrl)
      setMA100(ma100url)
      setMA200(ma200url)
      setPrediction(predictionUrl)
      setMSE(response.data.mse)
      setRMSE(response.data.rmse)
      setR2(response.data.r2)

      setError('')
      if(response.data.error){
        setError(response.data.error)
      }
    }


    catch(error){
      // console.log("There was an error making the API request!", error.response.data)
    }


    finally{
      setLoading(false)
    }
  }



  return (
    <>
        
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>

              <form action="" onSubmit={handleSubmit}>

                  <input type="text" className='form-control' required
                  onChange={f1} value={ticker} placeholder='Enter Stock Ticker' />

                  <small>
                    {error && <div className='text-danger'>{error}</div>}
                  </small>

                  {loading ? (
                    <button type='submit' disabled className='btn btn-info mt-3'>Generating...</button>
                  ) : (
                    <button type='submit' className='btn btn-info mt-3'>See Predictions</button>
                  )}
              </form>

            </div>

            <div className='prediction mt-5'>
                  {prediction && !error ? (
                        <>
                        <div className='p-3'>
                              {plot && (<img src={plot} style={{maxWidth: '100%'}} /> )}
                          </div>

                          <div className='p-3'>
                              {ma100 && (<img src={ma100} style={{maxWidth: '100%'}} /> )}
                          </div>

                          <div className='p-3'>
                              {ma200 && (<img src={ma200} style={{maxWidth: '100%'}} /> )}
                          </div>

                          <div className='p-3'>
                              {prediction && (<img src={prediction} style={{maxWidth: '100%'}} /> )}
                          </div>

                          <div className='text-light p3'>
                            {/* <h4>Model Evaluation</h4>
                            <p>Mean Squared Error (MSE): {mse}</p>
                            <p>Root Mean Squared Error (RMSE): {rmse}</p> */}
                            <h4 style={{textAlign:'center'}}>R-Squared: {r2}</h4>
                          </div>
                        </>
                      ) : (
                        <>
                          
                        </>
                  )}

            </div>
        </div>
      </div>

    </>
  )
}

export default DashboardComponent