import type { Auth } from '../types/auth.type'
import { type StateCreator } from 'zustand'
import type { UsuarioModel } from '../types/usuario.type'

export interface AuthSliceStore {
    isLoading: boolean
    setAuth: (auth: Auth) => void
    setUsuario: (usuario: UsuarioModel) => void
    auth: Auth | null
    clientError: string | null
    totalCarrito: number
    setTotalCarrito: (total: number) => void
}

// export const createAuthSlice: StateCreator<> = create<AuthSliceStore>()((set) => ({
//     auth: null,
//     setAuth: (auth: Auth) => set((state) => ({ auth })),
// }))

export const createAuthSlice: StateCreator<AuthSliceStore, [], [], AuthSliceStore> = (set) => ({
    auth: null,
    totalCarrito: 0,
    setAuth: (auth: Auth) => set(() => ({ auth })),
    setUsuario: (usuario: UsuarioModel) => set((store) => ({ 
        ...store,
        auth: {  
            ...store.auth!,
            usuario, 
        } 
    })),
    setTotalCarrito: ( total : number ) => set( () => ({ totalCarrito : total })),
    clientError: null,
    isLoading: false
})