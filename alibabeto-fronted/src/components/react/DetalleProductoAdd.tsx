import React, { type FC } from 'react'
import type { Producto } from '../../types/Productos'
import useProductoFicha from '../../hooks/useProductoFicha'
import CarouselImagenes from './DetalleProducto/CarouselImagenes'

const imagenesSwiper: string[] = [
    'https://www.notebookcheck.org/fileadmin/_processed_/5/8/csm_MateBook_X_Pro_MachR_Grey_Front_Angle_RGB_15d67819ca.jpg',
    'https://www.notebookcheck.org/fileadmin/_processed_/0/2/csm_MateBook_X_Pro_MachR_Grey_Top_IMG_2190_RGB_dab491d4a2.jpg  ',
    'https://www.notebookcheck.org/fileadmin/_processed_/5/a/csm_MateBook_X_Pro_MachR_Grey_SpecialAngle_Left_Top_Front_2_RGB_4d7c1407a4.jpg',
    'https://www.notebookcheck.org/fileadmin/_processed_/e/9/csm_MateBook_X_Pro_Green_Front_RGB_6e0d58a1e9.jpg',
];

const DetalleProductoAdd: FC<Producto> = (producto) => {

    const { descripcion, existencias, precio, codigo, imagen } = producto

    const {
        isLoading,
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
        <>
            <div className="w-full">
                {/* <img
                    className="max-w-[400px] rounded-md object-cover mx-auto"
                    src={imagen}
                    alt={descripcion}
                /> */}
                <CarouselImagenes
                    imagenes={imagenesSwiper}
                />
            </div>
            <div className="w-full h-full mx-auto">

                <h3 className="text-black uppercase text-3xl font-bold">
                    {codigo}
                </h3>

                <section className='mt-3 mb-3'>
                    <div className="flex items-center">
                        <svg className="w-5 h-5  text-orange-400/90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-orange-400/90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-orange-400/90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-orange-400/90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                    </div>
                </section>

                <p className='text-justify'>
                    {
                        descripcion
                    }
                </p>

                <div className='mt-3 my-3 flex justify-between'>
                    <article className='flex flex-col'>
                        <label className='font-bold mb-2' htmlFor="">Cantidad</label>
                        <div className="inline-flex rounded-md font-bold" role="group">
                            <button onClick={handleDecrementCantidad} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-r-0 bg-white border border-gray-200 rounded-s-lg">
                                <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                                </svg>
                            </button>
                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                                {cantidadProducto}
                            </button>
                            <button onClick={handleIncrementCantidad} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-l-0 border-gray-200 rounded-e-lg">
                                <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                </svg>
                            </button>
                        </div>
                    </article>
                    <article className='flex flex-col items-end '>
                        <h3 className='text-3xl font-bold mb-2'>${precio}</h3>
                        <span className='text-xs opacity-50 font-bold'>
                            +12% IVA agregado
                        </span>
                    </article>
                </div>

                <button
                    onClick={handleAddProductoCarrito}
                    disabled={isLoading}
                    className={
                        `
                        ${isLoading ? 'opacity-50 py-3' : ''}
                        mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center flex justify-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                        `
                    }
                >

                    {
                        isLoading
                            ?
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            :
                            <>
                                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                                Agregar al carrito
                            </>
                    }
                </button>

                <div className='my-5'>

                    <h3 className='font-bold text-xl'>Detalles del producto</h3>

                    <ul className='mt-3'>
                        <li className='font-bold flex items-center justify-between border-b-gray-400/50 border border-t-0 border-r-0 border-l-0 pb-3'>
                            <p>
                                Importe
                            </p>
                            <p>
                                {importe}
                            </p>
                        </li>
                        <li className='font-bold mt-3 flex items-center justify-between border-b-gray-400/50 border border-t-0 border-r-0 border-l-0 pb-3'>
                            <p>
                                Importe
                            </p>
                            <p>
                                {importe}
                            </p>
                        </li>
                        <li className='font-bold mt-3 flex items-center justify-between border-b-gray-400/50 border border-t-0 border-r-0 border-l-0 pb-3'>
                            <p>
                                Importe
                            </p>
                            <p>
                                {importe}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default DetalleProductoAdd