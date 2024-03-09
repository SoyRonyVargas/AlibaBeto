import { useMemo, useState } from 'react'
import Decimal from 'decimal.js'
import { AuthAxios } from '../api/axios'
import type { Producto } from '../types/Productos'
import { useStore } from '../store'
import { toast } from 'react-toastify'


type Props = {
  maxCantidad: number
  producto: Producto
}

const useProductoFicha = ({ maxCantidad = 1 , producto: { precio , id } }: Props) => {

    const [ isLoading , setLoading ] = useState(false)
    const { totalCarrito ,  setTotalCarrito } = useStore()

    const [ cantidadProducto , setCantidadProducto ] = useState(1)

    const { importe } = useMemo( () => {

      const _cantidad = new Decimal(cantidadProducto)
      const _precio = new Decimal(precio)

      const _importe = _precio.times(_cantidad)

      return {
        importe: _importe
      }

    }, [cantidadProducto])

    const handleIncrementCantidad = () => {

        if( cantidadProducto < 1 || cantidadProducto >= maxCantidad ) return

        setCantidadProducto( cantidadProducto + 1 )

    }
    
    const handleDecrementCantidad = () => {

        if( cantidadProducto <= 1 || cantidadProducto >= maxCantidad ) return

        setCantidadProducto( cantidadProducto - 1 )

    }

    const handleAddProductoCarrito = async () => {

      try 
      {

        if( isLoading ) return
        
        // cantidad: number;
        // importe: number;
        // iva: number;
        // total: number;
        // productoID: number;
        setLoading(true)
        
        await AuthAxios.post("/carrito/add/producto", {
          cantidad: cantidadProducto,
          importe: importe.toNumber(),
          iva: 0,
          total: importe,
          productoID: id
        })

        setTotalCarrito( totalCarrito + 1 )        
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setLoading(false)

        toast.success('¡Articulo agregado al carrito!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      } catch (error) {
        
      }

    }

    return {
      isLoading,
      importe: importe.toString(),
      cantidadProducto,
      handleDecrementCantidad,
      handleIncrementCantidad,
      handleAddProductoCarrito
    }

}

export default useProductoFicha