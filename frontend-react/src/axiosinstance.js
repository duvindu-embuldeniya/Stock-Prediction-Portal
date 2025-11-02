import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    }
})




//Request Intercepter
axiosInstance.interceptors.request.use(
    function(config){
        let accessToken = localStorage.getItem('access')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        // console.log(config) //request we sent to views.py
        
        return config;  // wht we get from views.py & will asign to dahsboard.jsx response

    }
    // , function(error){
    //     return Promise.reject(error)
    // }
)





// Response Interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response
    },


    //Handle failed responses
    async function(error){ //error like 401

        // const response = error.config //store the failed request (wht we sent and failed)
        // if(error.response.status === 401 && !response.retry){
        //     response.retry = true
        if(error.response.status === 401){

            const refereshToken = localStorage.getItem('refresh')

            try{
                const response = await axios.post('http://localhost:8000/api/v1/token/refresh/', {refresh: refereshToken})
                // console.log('New Access Token :- ',response.data.access)
                // try to get new access token using existing refrsh token

                localStorage.setItem('access', response.data.access)
                response.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(response)
                
            }catch(error){ //if refresh token has expired...........
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                
                window.location.href = '/login'
            }
        }
        // return Promise.reject(error)
    }
)





export default axiosInstance