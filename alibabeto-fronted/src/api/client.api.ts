import axios from 'axios'

export const clientAxiosConfig = axios.create({
    baseURL: 'http://localhost:4321'
})