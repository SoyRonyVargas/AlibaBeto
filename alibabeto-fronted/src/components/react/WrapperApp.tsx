// import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useEffect, type FC } from 'react'
import { useStore } from '../../store';

type Props = {
    children: React.ReactNode
}

// const queryClient = new QueryClient()

const WrapperApp: FC<Props> = ({ children }) => {

    const { auth } = useStore()

    useEffect(() => {

        if (auth) {
            // alert("Autenticado")
        }

    }, [auth])

    return (
        <div>
            {/* envuelto queryclient */}
            {children}
        </div>
    )
}

export default WrapperApp