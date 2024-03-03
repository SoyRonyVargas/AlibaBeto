import { getCookie } from "./getCookie"

const NAME_ITEM_TOKEN = 'token'

export const checkToken = () : string | null => {

    try
    {
        const token = getCookie("token-auth")
        return token
    }
    catch(err)
    {
        console.log(err);
        return null
        throw new Error('Error al guardar el token')
    }

}