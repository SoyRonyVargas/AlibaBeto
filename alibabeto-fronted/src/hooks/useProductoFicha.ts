import type { Producto } from '../types/Productos'
import { useMemo, useState } from 'react'
import { AuthAxios } from '../api/axios'
import { useStore } from '../store'
import { toast } from 'react-toastify'

import Decimal from 'decimal.js'
import Swal from 'sweetalert2'
import { formatter } from '../utils/formatter'

type Props = {
  maxCantidad: number
  producto: Producto
}

const useProductoFicha = ({ maxCantidad = 1 , producto: { precio , id } }: Props) => {

    const [ isLoading , setLoading ] = useState(false)
    const { totalCarrito ,  setTotalCarrito } = useStore()
    const [ cantidadProducto , setCantidadProducto ] = useState(1)

    const { importe , iva , total } = useMemo( () => {

      const _cantidad = new Decimal(cantidadProducto)
      const _precio = new Decimal(precio)

      const _importe = _precio.times(_cantidad)
      
      const iva = _precio.times(0.16)

      const _total = _importe.plus(iva)

      return {
        importe: _importe,
        iva,
        total: _total
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
          total: total.toNumber(),
          iva: iva.toNumber(),
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
      importe: formatter.format(importe.toNumber()),
      iva: formatter.format(iva.toNumber()),
      total: formatter.format(total.toNumber()),
      cantidadProducto,
      handleDecrementCantidad,
      handleIncrementCantidad,
      handleAddProductoCarrito
    }

}

export default useProductoFicha