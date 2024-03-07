import React, { type FC } from 'react'
import type { Producto } from '../../types/Productos'
import useProductoFicha from '../../hooks/useProductoFicha'

const DetalleProductoAdd: FC<Producto> = (producto) => {

    const { descripcion, existencias, precio } = producto

    const {
        importe,
        cantidadProducto,
        handleIncrementCantidad,
        handleDecrementCantidad,
        handleAddProductoCarrito
    } = useProductoFicha({
        maxCantidad: existencias,
        producto
    })

    return (
        <div className="w-full h-full mx-auto">
            <h3 className="text-gray-700 uppercase text-lg">
                {descripcion}
            </h3>
            <span className="text-gray-500 mt-3">
                ${precio}
            </span>
            <hr className="my-3" />
            <div className="mt-2">
                <label className="text-gray-700 text-sm" htmlFor="count">
                    Cantidad:
                </label>
                <div className="flex items-center mt-1">
                    <button
                        id="decrementButton"
                        onClick={handleDecrementCantidad}
                        className="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <span id="counter" className="text-gray-700 text-lg mx-2">
                        {cantidadProducto}
                    </span>
                    <button
                        onClick={handleIncrementCantidad}
                        id="incrementButton"
                        className="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                        </svg>
                    </button>
                </div>
                <label className="text-gray-700 text-sm opacity-50" htmlFor="count">
                    Existencias:
                </label>
                <label className="text-gray-700 text-sm opacity-50" htmlFor="count">
                    {existencias}
                </label>
                <div>
                    <p>
                        <strong>Importe: </strong> <span>${importe}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center mt-6">
                <button onClick={handleAddProductoCarrito} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                    Agregar al carrito
                </button>
            </div>
        </div>

    )
}

export default DetalleProductoAdd