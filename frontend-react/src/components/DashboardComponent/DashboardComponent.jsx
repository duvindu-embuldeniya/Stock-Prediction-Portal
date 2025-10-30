import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'

const DashboardComponent = () => {
//   const accessToken = localStorage.getItem('access')

  useEffect(() => {
    const fetchResponseData = async () =>{
        try{
            const response = await axiosInstance.get('/protected-view/')
            console.log("Success -> ", response.data)
        }
        catch(error){
            console.log("Error ->",error.response.data)
        }
    }
    fetchResponseData()
  },[])

  return (
    <>
        


    </>
  )
}

export default DashboardComponent