export interface Producto {
    id: number;
    status: number;
    imagen: string;
    codigo: string;
    descripcion: string;
    precio: number;
    existencias: number;
    CategoriaFK: number;
    CreatedDate: Date;
  }