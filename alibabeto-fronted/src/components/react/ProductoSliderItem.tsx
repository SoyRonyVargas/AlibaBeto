import React, { type FC } from 'react'
import type { Producto } from '../../types/Productos'

const ProductoSliderItem: FC<Producto> = ({
    codigo,
    descripcion,
    precio,
    id,
    imagen
}) => {

    function formatarComoMonedaMexicana(valor: number): string {
        // Opciones de formato para moneda mexicana
        const opcionesDeFormato = {
            style: 'currency',
            currency: 'MXN'
        };

        // Formatear el número como moneda mexicana
        const valorFormateado = valor.toLocaleString('es-MX', opcionesDeFormato);

        return valorFormateado;
    }

    return (


        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/producto/${id}`}>
                <img className="p-8 rounded-t-lg h-48 mx-auto" src={imagen} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a>
                    <p className='opacity-50 text-xs'>
                        {
                            codigo
                        }
                    </p>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {
                            descripcion
                        }
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-start justify-between flex-col">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {formatarComoMonedaMexicana(precio)}
                    </span>
                    <a className="block text-white bg-alibabeto-1 w-full mt-3 font-medium rounded-md text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Agregar al carrito
                    </a>
                </div>
            </div>
        </div>

        // <a href={`/producto/${id}`} classNameName="block w-[100%] mx-auto bg-white shadow rounded-xl">
        //     <div
        //         classNameName="h-64 w-full rounded-xl bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        //         style={{
        //             backgroundImage: `url(${imagen})`,
        //             backgroundRepeat: 'no-repeat'
        //         }}
        //     >
        //         <div>
        //             <span classNameName="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
        //                 available
        //             </span>
        //         </div>
        //     </div>
        //     <div classNameName="p-4 flex flex-col items-center">
        //         <p classNameName="text-gray-400 font-light text-xs text-center">
        //             {codigo}
        //         </p>
        //         <h1 classNameName="text-gray-800 text-center mt-1">
        //             {codigo}
        //         </h1>
        //         <p classNameName="text-center text-gray-800 mt-1">
        //             {`$${precio}`}
        //         </p>
        //         {/* <button classNameName="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
        //             Agregar al carrito
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 classNameName="h-6 w-6 ml-2"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth={2}
        //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        //                 />
        //             </svg>
        //         </button> */}
        //         {/* <div classNameName="flex justify-between w-full mt-4">
        //             <div classNameName="flex items-center text-gray-500">
        //                 <input id="input1" type="checkbox" classNameName="mr-2" />
        //                 <label htmlFor="input1" classNameName="select-none cursor-pointer">
        //                     Compare
        //                 </label>
        //             </div>
        //             <div>
        //                 <button classNameName="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
        //                     Add to List
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         classNameName="h-4 w-4 ml-2"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth={2}
        //                             d="M19 9l-7 7-7-7"
        //                         />
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div> */}
        //     </div>
        // </a>

    )
}

export default ProductoSliderItem