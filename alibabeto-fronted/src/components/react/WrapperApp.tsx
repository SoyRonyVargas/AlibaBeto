// import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useEffect, type FC } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer />
        </div>
    )
}

export default WrapperApp