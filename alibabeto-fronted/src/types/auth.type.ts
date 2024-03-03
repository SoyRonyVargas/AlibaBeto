import type { UsuarioModel } from "./usuario.type"

export type Auth = {
    token: string
    usuario: UsuarioModel
}