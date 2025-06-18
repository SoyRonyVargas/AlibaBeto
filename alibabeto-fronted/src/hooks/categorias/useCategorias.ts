import { useState , useEffect } from 'react'
import { AuthAxios } from '../../api/axios'
import type { BasicResponse } from '../../types/API'
import type { Categoria } from '../../types/categoria.type'

const useCategorias = () => {

    const [ categorias , setCategorias ] = useState<Categoria[]>([])
    const [ isLoading , setLoading ] = useState<boolean>(false)

    useEffect( () => {

        handleGetCategorias()

    }, [])

    const handleGetCategorias = async () => {

        try
        {

            const { data: { data } } = await AuthAxios.get<BasicResponse<Categoria[]>>('/categoria/all')

            setCategorias(data)

        }
        catch
        {

        }

    }

    return {
        isLoading,
        categorias
    }

}

export default useCategorias