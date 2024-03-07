import { getCookie } from "./getCookie"

const NAME_ITEM_TOKEN = 'token'

export const checkToken = () : string | null => {

    try
    {
        const token = window.localStorage.getItem("token-auth") ?? ""
        return token
    }
    catch(err)
    {
        console.log(err);
        return ""
    }

}