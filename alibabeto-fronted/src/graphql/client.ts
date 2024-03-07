import { ApolloClient, createHttpLink, from, gql, InMemoryCache, split } from '@apollo/client/core/index.js';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
// Crear un enlace HTTP
import ws from 'ws';
// Crear un enlace HTTP
const httpLink = createHttpLink({
    uri: 'http://localhost:3000', // Cambia la URL por la de tu servidor GraphQL
});


// const wsClient = new SubscriptionClient('ws://localhost:3000', {
//     reconnect: true
// }, ws)

// const wsLink = new WebSocketLink({
//     uri: `ws://example.com/graphql`, // Cambia la URL por la de tu servidor GraphQL
//     options: {
//       reconnect: true,
//     },
//     webSocketImpl: window.WebSocket,  // Especifica el objeto WebSocket nativo del navegador
//   });
  

// const link = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//     },
//     wsLink,
//     httpLink
// );
const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient