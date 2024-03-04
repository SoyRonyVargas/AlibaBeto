import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Producto, ProductoId } from './producto'
import type { Proveedore, ProveedoreId } from './proveedore'
import type { Usuario, UsuarioId } from './usuario'

export interface EntradaAttributes {
  id: number
  status: number
  importe: number
  iva: number
  total: number
  ProveedorFK: number
  UsuarioFK: number
  ProductoFK?: number
  CreatedDate: Date
}

export type EntradaPk = 'id'
export type EntradaId = Entrada[EntradaPk]
export type EntradaOptionalAttributes = 'id' | 'ProductoFK'
export type EntradaCreationAttributes = Optional<EntradaAttributes, EntradaOptionalAttributes>

export class Entrada extends Model<EntradaAttributes, EntradaCreationAttributes> implements EntradaAttributes {
  id!: number
  status!: number
  importe!: number
  iva!: number
  total!: number
  ProveedorFK!: number
  UsuarioFK!: number
  ProductoFK?: number
  CreatedDate!: Date

  // Entrada belongsTo Producto via ProductoFK
  ProductoFK_producto!: Producto
  getProductoFK_producto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProductoFK_producto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProductoFK_producto!: Sequelize.BelongsToCreateAssociationMixin<Producto>
  // Entrada belongsTo Proveedore via ProveedorFK
  ProveedorFK_proveedore!: Proveedore
  getProveedorFK_proveedore!: Sequelize.BelongsToGetAssociationMixin<Proveedore>
  setProveedorFK_proveedore!: Sequelize.BelongsToSetAssociationMixin<Proveedore, ProveedoreId>
  createProveedorFK_proveedore!: Sequelize.BelongsToCreateAssociationMixin<Proveedore>
  // Entrada belongsTo Usuario via UsuarioFK
  UsuarioFK_usuario!: Usuario
  getUsuarioFK_usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuarioFK_usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuarioFK_usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof Entrada {
    return Entrada.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      importe: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      iva: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      ProveedorFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'proveedores',
          key: 'id'
        }
      },
      UsuarioFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      ProductoFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productos',
          key: 'id'
        }
      },
      CreatedDate: {
        type: DataTypes.DATE(6),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'entradas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'UsuarioFK',
          using: 'BTREE',
          fields: [
            { name: 'UsuarioFK' }
          ]
        },
        {
          name: 'ProveedorFK',
          using: 'BTREE',
          fields: [
            { name: 'ProveedorFK' }
          ]
        },
        {
          name: 'ProductoFK',
          using: 'BTREE',
          fields: [
            { name: 'ProductoFK' }
          ]
        }
      ]
    })
  }
}
