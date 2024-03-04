import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import useCreateProducto from '../../../hooks/productos/useCreateProducto'

const CreateProducto = () => {


    // body('status').isInt().not().isEmpty().withMessage('El campo status debe ser un número entero y no puede estar vacío.'),
    // body('imagen').isString().not().isEmpty().withMessage('El campo imagen debe ser una cadena de texto y no puede estar vacío.'),
    // body('codigo').isString().not().isEmpty().withMessage('El campo codigo debe ser una cadena de texto y no puede estar vacío.'),
    // body('descripcion').isString().not().isEmpty().withMessage('El campo descripcion debe ser una cadena de texto y no puede estar vacío.'),
    // body('precio').isFloat().not().isEmpty().withMessage('El campo precio debe ser un número de punto flotante y no puede estar vacío.'),
    // body('existencias').isInt().not().isEmpty().withMessage('El campo existencias debe ser un número entero y no puede estar vacío.'),
    // body('CategoriaFK').isInt().not().isEmpty().withMessage('El campo CategoriaFK debe ser un número entero y no puede estar vacío.')

    const initialState = {
        codigo: '',
        descripcion: '',
        precio: 0,
        existencias: 0,
        categoriaID: 1,
        status: 0,
        imagen: 'https://www.infobae.com/new-resizer/kiOhQurrh5GN8r2LWdmqyQMBjvg=/1440x1080/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/7JY2EC2GUFGORD7STBZQOC2TZM.PNG'
    }

    const { handleSubmit } = useCreateProducto()

    const {
        formState,
        errors,
        onInputChange,
        handleSubmitForm
    } = useForm(initialState, [], handleSubmit)

    return (
        <>
            {/* <pre>
                {
                    JSON.stringify(formState, null, 3)
                }
            </pre> */}
            <div className="max-w-2xl mx-auto bg-white p">
                <form onSubmit={handleSubmitForm}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">
                        <div>
                            <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Codigo
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="CELULAR"
                                name='codigo'
                                value={formState.codigo}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Descripcion
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Iphone 15 Pro MAX"
                                name='descripcion'
                                value={formState.descripcion}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="company"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Precio
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="$1.00"
                                name='precio'
                                value={formState.precio}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="company"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Existencias
                            </label>
                            <input
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="0"
                                name='existencias'
                                value={formState.existencias}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>
                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"

                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                            .
                        </label>
                    </div> */}
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Crear
                    </button>
                </form>
                {/* <p className="mt-5">
                    These input field components is part of a larger, open-source library of
                    Tailwind CSS components. Learn more by going to the official{" "}
                    <a
                        className="text-blue-600 hover:underline"
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        target="_blank"
                    >
                        Flowbite Documentation
                    </a>
                    .
                </p> */}
            </div>
        </>

    )
}

export default CreateProducto