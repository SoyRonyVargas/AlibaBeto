export interface UsuarioModel {
    id: number
    nombre?: string
    apellidos?: string
    correo: string
    Imagen: string
    Rol: {
      id: number
      nombre: string
    }
  }