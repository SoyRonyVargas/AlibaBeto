import type { Producto } from "./Productos";

export type AgregarCarrito = {
    cantidad: number;
    importe: number;
    iva: number;
    total: number;
    productoID: number;
}

export type ProdutoCarito = {
    producto: Producto
    cantidad: number;
    importe: number;
    total: number;
    iva: number;
    id: number
}