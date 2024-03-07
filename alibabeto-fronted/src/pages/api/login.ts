import { AuthAxios } from "../../api/axios";
import { lucia } from "../../auth/lucia";
import { type APIContext } from "astro";
import { type BasicResponse } from "../../types/API";
import { type Auth } from "../../types/auth.type";

export async function GET(context: APIContext): Promise<Response> {
    return new Response("Invalid password", {
        status: 400
    });

}
export async function POST(context: APIContext): Promise<Response> {

    try {
        
        const formData = await context.request.formData();

        const { data: { data : { token , usuario } } } = await AuthAxios.post<BasicResponse<Auth>>("/auth/login", formData)

        console.log("Respuesta de mi server")
        console.log(token);
        
        const session = await lucia.createSession( String(usuario.id) , {
            user_id: String(usuario.id)
        });

        const sessionCookie = lucia.createSessionCookie(session.id);

        context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        
        context.cookies.set( 'token-auth', token, sessionCookie.attributes);
        
        // await lucia.validateSession(session.id);

        return new Response(JSON.stringify({
            token , usuario 
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    }
    catch (err:any) {
        // console.log(err);
        // console.log("err.response");
        // console.log(err.response.data); 
        
        const jsonData = err.response.data ?? {}
        // If usernames are public, you may outright tell the user that the username is invalid.
        return new Response(JSON.stringify(jsonData), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

}