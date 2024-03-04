import type { Auth } from '../types/auth.type'
import { type StateCreator } from 'zustand'
import type { UsuarioModel } from '../types/usuario.type'

export interface AuthSliceStore {
    isLoading: boolean
    setAuth: (auth: Auth) => void
    setUsuario: (usuario: UsuarioModel) => void
    auth: Auth | null
    clientError: string | null
}

// export const createAuthSlice: StateCreator<> = create<AuthSliceStore>()((set) => ({
//     auth: null,
//     setAuth: (auth: Auth) => set((state) => ({ auth })),
// }))

export const createAuthSlice: StateCreator<AuthSliceStore, [], [], AuthSliceStore> = (set) => ({
    auth: null,
    setAuth: (auth: Auth) => set(() => ({ auth })),
    setUsuario: (usuario: UsuarioModel) => set((store) => ({ 
        ...store,
        auth: {  
            ...store.auth!,
            usuario, 
        } 
    })),
    clientError: null,
    isLoading: false
})