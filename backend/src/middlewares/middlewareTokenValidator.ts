// import { validateJWT } from "../auth/helpers/validateJWT";
import { type JWTAuthPayload, type Middleware } from './../types/index'

export const MiddlewareTokenValidator: Middleware<JWTAuthPayload> = (req, res, next) => {
  const token = req.headers['x-auth-token']

  if (!token) {
    return res.status(401).json([
      // {
      //   msg: "Token invalido",
      //   location: "headers",
      //   value: null,
      // }
    ])
  }

  // const result = validateJWT(token)

  // console.log(result);

  // if( result === null )
  // {

  //   return res.status(401).json([
  //     {
  //       msg: "Token invalido",
  //       param: "token",
  //       location: "headers",
  //       value: token
  //     }
  //   ])

  // }

  // req.payload = result

  next()
}
