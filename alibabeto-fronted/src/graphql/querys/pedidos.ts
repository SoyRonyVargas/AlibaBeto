import { gql } from "@apollo/client";

export const SUBSCRIPTION_PEDIDO_CREADO = gql`
  subscription {
    pedidoCreado {
      id
    }
  }
`;