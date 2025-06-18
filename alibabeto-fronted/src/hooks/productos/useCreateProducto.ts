import { useState } from 'react'
import { AuthAxios } from '../../api/axios'
import Swal from 'sweetalert2'
import { type SubmitHandler } from "react-hook-form";
import type { InputsCreateProducto } from '../../types/Productos';

type CreateProducto = {
    descripcion: string
    codigo: string
    status: any
    imagen: string
    precio: number
    existencias: number
    CategoriaFK: number
    // body('status').isInt().not().isEmpty().withMessage('El campo status debe ser un número entero y no puede estar vacío.'),
    // body('imagen').isString().not().isEmpty().withMessage('El campo imagen debe ser una cadena de texto y no puede estar vacío.'),
    // body('codigo').isString().not().isEmpty().withMessage('El campo codigo debe ser una cadena de texto y no puede estar vacío.'),
    // body('descripcion').isString().not().isEmpty().withMessage('El campo descripcion debe ser una cadena de texto y no puede estar vacío.'),
    // body('precio').isFloat().not().isEmpty().withMessage('El campo precio debe ser un número de punto flotante y no puede estar vacío.'),
    // body('existencias').isInt().not().isEmpty().withMessage('El campo existencias debe ser un número entero y no puede estar vacío.'),
    // body('CategoriaFK').isInt().not().isEmpty().withMessage('El campo CategoriaFK debe ser un número entero y no puede estar vacío.')
}

const useCreateProducto = ( ) => {
  
    const [ isLoading , setLoading ] = useState(false)
    const [ images, updateImages ] = useState<any>([])

    const uploadImage = async () => {
        
        try 
        {
            
            const formData = new FormData();

            formData.append('imagen', images[0].file); 
          
            const { data: { data: { image } } } = await AuthAxios.post('/upload/create', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });

            return image
          
        } catch (error) {
          console.error('Error al subir la imagen:', error);
        }
      };
    

    const onSubmit: SubmitHandler<InputsCreateProducto> = async ( _payload ) => {

        try {
            
            debugger
            if( isLoading ) return

            setLoading(true)
            
            const image = await uploadImage()

            const payload = {
                ..._payload,
                imagen: image,
                categoriaID: Number(_payload.categoriaID),
                existencias: Number(_payload.existencias),
            }

            await AuthAxios.post('/producto/create', payload)
            
            setLoading(false)

            await Swal.fire({
                title: 'Producto creado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

            window.location.href = '/admin/productos'

        } 
        catch (error:any) 
        {
            setLoading(false)
            console.log(error)
            if( error?.response?.data?.msg )
            {
                const msg = error?.response?.data?.msg
                return await Swal.fire({
                    title: msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

            await Swal.fire({
                title: 'Error al crear el producto',
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        }

    }

    return {
        updateImages,
        isLoading,
        onSubmit
    }
}

export default useCreateProducto