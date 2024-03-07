import useCarrito from "../../../hooks/useCarrito"
import Button from "../buttons/Button"

const ProductosCarrito = () => {

    const { carrito, isLoading, handleSubmitCarrito } = useCarrito()

    return (
        <>
            <div className="grid border rounded-lg grid-contenedor-productos">
                <article className="item-card grid grid-cols-4 p-4 py-2 text-lg grid-columna border-r-0 border-l-0 border-t-0 border-b-gray-300 border">
                    <div className="col font-bold">Producto</div>
                    <div className="col font-bold">Precio</div>
                    <div className="col font-bold">Cantidad</div>
                    <div className="col font-bold">Eliminar</div>
                </article>

                {
                    carrito?.map(articulo => (
                        <article className="item-card grid grid-cols-4 p-4 pt-0 grid-columna mt-5 B">
                            <div className="col flex items-center font-bold gap-x-2">
                                <img
                                    className="w-12 h-12 object-cover rounded-md"
                                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                    alt=""
                                />
                                <p>Playera blanca</p>
                            </div>
                            <div className="col font-bold">$159.23</div>
                            <div className="col font-bold">1</div>
                            <div className="col font-bold">
                                <button>
                                    <svg
                                        className="w-6 h-6 text-red-500 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </article>

                    ))
                }
            </div>
            <article className="item-card border rounded-lg w-[90%] p-4">
                <h3 className="font-bold text-2xl">Total</h3>
                <hr className="mt-3 mb-3 block" />
                <p className="mb-3">
                    <strong className="flex items-start justify-between">
                        <span>Importe:</span>
                        <span>$350.99</span>
                    </strong>
                </p>
                <p className="mb-3">
                    <strong className="flex items-start justify-between">
                        <span>IVA:</span>
                        <span>$350.99</span>
                    </strong>
                </p>
                <p>
                    <strong className="flex items-start justify-between">
                        <span>Total:</span>
                        <span>$350.99</span>
                    </strong>
                </p>
                <hr className="mt-3 mb-3" />

                <Button
                    onClick={handleSubmitCarrito}
                    isLoading={isLoading}
                    text="Pagar"
                />
                <div className="mt-3">
                    <p className="font-semibold opacity-70 text-gray-500">Aceptamos</p>
                    <img
                        className="w-2/4"
                        src="https://www.classltd.com/wp-content/uploads/2021/09/class-payments.png"
                        alt=""
                    />
                </div>
            </article>

        </>
    )
}

export default ProductosCarrito