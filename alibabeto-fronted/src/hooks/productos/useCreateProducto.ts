import React from 'react'
import { AuthAxios } from '../../api/axios'
import Swal from 'sweetalert2'

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
  

    const handleSubmit = async ( payload : CreateProducto ) => {

        try {
            
            await AuthAxios.post('/producto/create', payload)

            await Swal.fire({
                title: 'Producto creado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

        } catch (error) {
            await Swal.fire({
                title: 'Error al crear el producto',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

    }

    return {
        handleSubmit
    }
}

export default useCreateProducto