import React from 'react'
import usePedidos from '../../../../hooks/admin/usePedidos'

const UltimosPedidos = () => {

    const { pedidos } = usePedidos()

    return (
        <div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Email</th>
                            <th className="text-left p-3 px-5">Role</th>
                            <th />
                        </tr>
                        {
                            pedidos.map(pedido => (
                                <tr className="border-b hover:bg-orange-100">
                                    <td className="p-3 px-5">
                                        {pedido.importe}
                                    </td>
                                    <td className="p-3 px-5">
                                        {pedido.iva}
                                    </td>
                                    <td className="p-3 px-5">
                                        {pedido.total}
                                    </td>
                                    <td className="p-3 px-5 flex justify-end">
                                        <button
                                            type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UltimosPedidos