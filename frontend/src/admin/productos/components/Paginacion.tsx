import { useContext } from "react"
import { AdminProductosListadoContext } from "../context/AdminProductosListadoContext"

const Paginacion = () => {

    const { handleSiguiente, totalPaginas, paginaActual } = useContext(AdminProductosListadoContext)!

    const elementos = [];

    for (let i = 0; i < totalPaginas; i++) {
        elementos.push(
            <li key={`id_${i}`} onClick={() => handleSiguiente(i + 1)}>
                <a
                    className={
                        `cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                        `
                    }
                >
                    {i + 1}
                </a>
            </li>
        );
    }

    return (
        <nav className='' aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {
                    paginaActual > 1 &&
                    <li>
                        <button
                            // onClick={handlePrevPage}
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                className="w-3 h-3 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </button>
                    </li>
                }
                {
                    elementos
                }
                <li>
                    <button
                        onClick={() => handleSiguiente(-1)}
                        className={`
                            flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700
                            ${paginaActual === totalPaginas && 'opacity-50 cursor-not-allowed'}
                        `}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav >
    )
}

export default Paginacion