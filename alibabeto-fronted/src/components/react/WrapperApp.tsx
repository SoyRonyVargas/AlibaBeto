import { QueryClient, QueryClientProvider } from 'react-query';
import React, { type FC } from 'react'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const WrapperApp: FC<Props> = ({ children }) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                envuelto queryclient
                {children}
            </QueryClientProvider>
        </div>
    )
}

export default WrapperApp