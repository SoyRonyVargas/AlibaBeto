// Librerías
import express, { type Application } from 'express'
import dotenv from 'dotenv'

// Routers
import provedoreesRouter from './router/proveedores.routes'
import usuariosRouter from './router/usuarios.routes'
import productosRouter from './router/producto.routes'
import rolesrouter from './router/roles.routes'
import entradaRouter from './router/entrada.routes'
import categoriaRouter from './router/categoria.routes'

// Base de Datos
import { getConnection } from './database/conection'
import { initModels } from './models/init-models'
import { sequelize } from './database'

// Middlewares
// import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator';

// Inicialización de la aplicación Express
const app: Application = express()

// Configuración de variables de entorno
dotenv.config()

// Puerto de la aplicación
const port = process.env.PORT ?? 8000

// Middleware para procesar datos en formato JSON
app.use(express.json())

// Rutas
app.use('/producto', productosRouter)
app.use('/usuario', usuariosRouter)
app.use('/proveedores', provedoreesRouter)
app.use('/categoria', categoriaRouter)
app.use('/roles', rolesrouter)
app.use('/entradas', entradaRouter)

// Inicialización de modelos Sequelize
app.listen(port, async () => {
  // Inicialización de modelos Sequelize
  initModels(sequelize)

  // Conexión a la base de datos
  await getConnection()

  console.log(`Servidor corriendo en http://localhost:${port}`)
})
