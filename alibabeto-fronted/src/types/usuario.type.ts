export interface UsuarioModel {
    id: number
    nombre?: string
    apellidos?: string
    password?: string
    correo: string
    nombreUsuario: string
    Imagen: string
    RolFK: number
    is_deleted: number
  }