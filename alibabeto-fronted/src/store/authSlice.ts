import type { Auth } from '../types/auth.type'
import { type StateCreator } from 'zustand'

export interface AuthSliceStore {
    isLoading: boolean
    setAuth: (auth: Auth) => void
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
    clientError: null,
    isLoading: false
})