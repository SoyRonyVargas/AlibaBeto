import { useEffect, useState } from 'react'
// import { SUBSCRIPTION_PEDIDO_CREADO } from '../../graphql/querys/pedidos'
import { AuthAxios } from '../../api/axios'
import { createClient } from 'graphql-ws';
// import WebSocket from 'ws';

const endpoint = 'ws://localhost:4000/graphql/ws'; // Ajusta la URL del servidor GraphQL-WS

const useAdminPedidos = () => {

  const [ pedidos , setPedidos ] = useState<any[]>([])
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    // Establecer la conexión WebSocket cuando el componente se monta
    const ws = new WebSocket('ws://localhost:3000/graphql/subscriptions', 'graphql-transport-ws'); // Reemplaza con la URL de tu servidor WebSocket

    // Manejar la apertura de la conexión
    ws.addEventListener('open', () => {
      alert("conexion prendida")
      console.log('WebSocket connection opened');
    });

    // Manejar los mensajes recibidos
    ws.addEventListener('message', (event) => {
      setPedidos((prevMessages) => [...prevMessages, event.data]);
    });
    
    ws.addEventListener('pedidoCreado', (event) => {
      alert("")
    });

    // Manejar errores
    ws.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    // Manejar el cierre de la conexión
    ws.addEventListener('close', () => {
      console.log('WebSocket connection closed');
    });

    // Actualizar el estado del socket
    setSocket(ws);

    // Limpiar la conexión WebSocket cuando el componente se desmonta
    return () => {
      // if (ws) {
      //   ws.close();
      // }
    };
  }, []);

  const sendPedidoMessage = () => {
    debugger
    if (socket && socket.readyState === WebSocket.OPEN) {
      const message = {
        type: 'subscribe',
        payload: {
          subscriptionType: 'pedidoCreado',
          params: { someParam: 'value' },
        },
      };
      socket.send(JSON.stringify(message));
      alert("enviado")
    }
  };
  
  const handleGetPedidos = async () => {
    
    sendPedidoMessage()
    
  }

  return {
    pedidos,
    handleGetPedidos
    // data
    // loading
  }
}

export default useAdminPedidos