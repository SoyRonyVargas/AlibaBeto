import { checkToken } from '../helpers/checkToken'
import axios from 'axios'

export const AuthAxios = axios.create({
    baseURL: 'http://localhost:3000',
})

AuthAxios.interceptors.request.use( ( config:any ) => {

    const token = checkToken()

    if( token )
    {
        config.headers = {
            ...config.headers,
            'x-auth-token': token
        }
    }

    return config

})