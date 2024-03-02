import { useState } from 'react'
import { axiosConfig } from '../api/axios'
import { useStore } from '../store'
import type { BasicResponse } from '../types/API'
import type { Auth } from '../types/auth.type'

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
  const handleSubmit = async () => {

    alert("Hola")

    try {

      const { data: { data } } = await axiosConfig.post<BasicResponse<Auth>>('/auth/login', {
        correo: 'john.doe@example.com',
        password: 'secreto123'
      })

      debugger

      setAuth({
        token: data.token,
        usuario: data.usuario
      })

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