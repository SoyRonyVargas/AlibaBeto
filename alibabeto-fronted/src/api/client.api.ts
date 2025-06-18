import { getCookie } from '../helpers/getCookie'
import axios from 'axios'

export const clientAxiosConfig = axios.create({
    baseURL: 'http://localhost:4321'
})

clientAxiosConfig.interceptors.request.use( ( config:any ) => {

    const token = getCookie('token-auth')

    if( token )
    {
        config.headers = {
            ...config.headers,
            'x-auth-token': token
        }
    }

    return config

})