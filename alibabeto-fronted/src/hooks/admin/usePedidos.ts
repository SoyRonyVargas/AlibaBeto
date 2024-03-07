import type { Pedido } from '../../types/pedido.type';
import { type BasicResponse } from '../../types/API';
import { useEffect, useState } from 'react';
import { AuthAxios } from '../../api/axios';
import io from 'socket.io-client';

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