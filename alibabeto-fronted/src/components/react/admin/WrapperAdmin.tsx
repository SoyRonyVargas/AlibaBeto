import { useStore } from '../../../store'
import type { UsuarioModel } from '../../../types/usuario.type'
import React, { useEffect, type FC } from 'react'
import { ToastContainer } from 'react-toastify';

// import Apollo from '@apollo/client/core/index.js';
// const { ApolloProvider } = Apollo;

type Props = {
    user?: UsuarioModel | null
    children: React.ReactElement | React.ReactNode
}
const WrapperAdmin: FC<Props> = ({ user, children }) => {

    const { setUsuario } = useStore()

    useEffect(() => {

        // alert("estado actualizado")

        if (user)
            setUsuario(user)

    }, [])

    return (
        <>
            {
                children
            }
            <ToastContainer />
        </>
    )
}

export default WrapperAdmin