import type { Auth } from '../types/auth.type'
import { type StateCreator } from 'zustand'

export interface AuthSliceStore {
    auth: Auth | null
    setAuth: (auth: Auth) => void
}

// export const createAuthSlice: StateCreator<> = create<AuthSliceStore>()((set) => ({
//     auth: null,
//     setAuth: (auth: Auth) => set((state) => ({ auth })),
// }))

export const createAuthSlice: StateCreator<AuthSliceStore, [], [], AuthSliceStore> = (set) => ({
    auth: null,
    setAuth: (auth: Auth) => set(() => ({ auth })),
})