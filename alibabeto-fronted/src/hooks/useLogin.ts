import { useState } from 'react'
import { AuthAxios } from '../api/axios'
import { useStore } from '../store'
import type { BasicResponse } from '../types/API'
import type { Auth } from '../types/auth.type'
import { clientAxiosConfig } from '../api/client.api'

const useLogin = () => {

  // const { refetch , isLoading , data } = useQuery('todos', API_ENDPOINTS.auth, {
  //     enabled: false,
  // })

  const { auth, setAuth } = useStore()

  const [formState, setFormState] = useState({
    correo: '',
    password: ''
  })

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {

    // alert("Hola")
    event.preventDefault()
    
    try {

      const formData = new FormData();
      formData.append('correo', 'john.doe@example.com');
      formData.append('password', 'secreto123');
      
      const { data: { data } } = await clientAxiosConfig.post('/api/login', formData)
      
      // debugger
      
      // setAuth({
      //   token: data.token,
      //   usuario: data.usuario
      // })

      event.currentTarget.submit()

    }
    catch (err) {

    }

  }

  return {
    auth,
    formState,
    onInputChange,
    handleSubmit
  }
}

export default useLogin