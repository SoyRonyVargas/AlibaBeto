import { useStore } from '../../../store'
import type { UsuarioModel } from '../../../types/usuario.type'
import React, { useEffect, type FC } from 'react'

type Props = {
    user: UsuarioModel
    children: React.ReactElement | React.ReactNode
}
const WrapperAdmin: FC<Props> = ({ user, children }) => {

    const { setUsuario } = useStore()

    useEffect(() => {

        // alert("estado actualizado")

        setUsuario(user)

    }, [])

    return (
        <>
            {
                children
            }
        </>
    )
}

export default WrapperAdmin