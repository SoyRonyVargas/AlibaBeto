import type { Pedido } from '../../types/pedido.type';
import { type BasicResponse } from '../../types/API';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { AuthAxios } from '../../api/axios';
import io from 'socket.io-client';
import { toast } from 'react-toastify';

const usePedidos = () => {

  const [ isLoading , setLoading ] = useState<boolean>(false)
  const [ pedidos , setPedidos ] = useState<Pedido[]>([])

  const socket = io('http://localhost:3000');

  useEffect(() => {

    handleGetPedidos()

    return () => {
      // Desconectar el socket al desmontar el componente
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    
    // Escucha eventos del servidor
    
    socket.on('PEDIDO_CREADO', (pedido:any) => {
      
        // alert('se creo un pedido')
      
        console.log('Mensaje desde el servidor:', pedido);

        // alert("pedido nuevo")
        
        setPedidos([
          pedido.pedido,
          ...pedidos,
        ])

        toast.success('¡Pedido nuevo!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });

    });

    return () => {
      
        // Desconectar el socket al desmontar el componente
      
      socket.disconnect();

    };

  }, [socket])

  const handleGetPedidos = async () => {

    try {

      setLoading(true)
      
      const { data: { data } } = await AuthAxios.get<BasicResponse<Pedido[]>>("/pedido/all")
      
      setPedidos(data)

      setLoading(false)
      
    } catch (error) {
      setLoading(false)
    }

  }

  return {
    isLoading,
    pedidos
  }

}

export default usePedidos