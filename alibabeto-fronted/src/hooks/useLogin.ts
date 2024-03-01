import { axiosConfig } from '../api/axios'
import { useStore } from '../store'
import type { BasicResponse } from '../types/API'
import type { Auth } from '../types/auth.type'

const useLogin = () => {
    
    // const { refetch , isLoading , data } = useQuery('todos', API_ENDPOINTS.auth, {
    //     enabled: false,
    // })
    const { auth , setAuth } = useStore()

    const handleSubmit = async () => {
        
      alert("Hola")
      
      try
      {

        debugger 

        const { data } = await axiosConfig.post<Auth>('/auth/login', {
          correo: 'prueb2a@gmail.com',
          password: '123456'
        })

        setAuth({
          token: data.token,
          usuario: data.usuario
        })

      }
      catch(err)
      {

      }

    }

  return {
    auth,
    handleSubmit
  }
}

export default useLogin