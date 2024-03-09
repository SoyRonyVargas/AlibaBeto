import type { AgregarCarrito } from '../types/carrito.type'
import { type Producto } from '../types/Productos'
import type { BasicResponse } from '../types/API'
import { useEffect, useState } from 'react'
import { AuthAxios } from '../api/axios'
import Swal from 'sweetalert2'

const useCarrito = () => {
  
    // const handleAddProducto
    const [ carrito , setCarrito ] = useState<Producto[]>([])
    const [ isLoading , setIsLoading ] = useState(false)

    useEffect( () => {

      getProductosCarrito()

    } , [])

    const getProductosCarrito = async () => {

      try {
        
        const { data : { data } } = await AuthAxios.get<BasicResponse<Producto[]>>('/carrito')

        console.log(data)

        setCarrito(data)
        
      } catch (error) {
        throw new Error("Error")
      }

    }

    const handleAddProducto = async ( producto : AgregarCarrito ) => {

      AuthAxios.post('/carrito/add' , {

      })

    }

    const handleSubmitCarrito = async () => {

      try {

        setIsLoading(true)
        
        // body('direccionEntregaID').isInt().withMessage('El campo direccionEntregaID debe ser un número entero.'),
        // body('fechaPedido').isISO8601().toDate().withMessage('El campo fechaPedido debe ser una fecha en formato ISO 8601.'),
        // body('importe').isFloat().withMessage('El campo importe debe ser un número de punto flotante.'),
        // body('iva').isFloat().withMessage('El campo iva debe ser un número de punto flotante.'),
        // body('total').isFloat().withMessage('El campo total debe ser un número de punto flotante.'),
        // body('productos').isArray({ min: 1 }).withMessage('El campo productos no puede estar vacío y debe ser un array.')

        const { data : { data } } = await AuthAxios.post('/pedido/create', {
          direccionEntregaID: 1,
          fechaPedido: new Date(),
          importe: 150,
          iva: 25,
          total: 1,
          productos: [
            {
              cantidad: 1,
              importe: 1,
              iva: 1,
              total: 1,
              productoID: 36,
            }
          ]
        })
        
        console.log(data)
        
        // setCarrito(data)
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false)

        await Swal.fire({
          title: "¡Pedido completado!",
          icon: "success"
        });
        
      } catch (error) {
        setIsLoading(false)
        throw new Error("Error")
      }

    }

    return {
      handleSubmitCarrito,
      isLoading,
      carrito
    }
}

export default useCarrito