import { lucia } from "../../auth/lucia";
import type { APIContext } from "astro";
export async function GET(context: APIContext): Promise<Response> {
    return new Response("Invalid password", {
        status: 400
    });

}
export async function POST(context: APIContext): Promise<Response> {

    try {
        const formData = await context.request.formData();

        const correo = formData.get("correo");

        const password = formData.get("password");

        if (typeof password !== "string" || password.length > 255) {
            return new Response("Invalid password", {
                status: 400
            });
        }

        // const existingUser = await db
        // 	.table("username")
        // 	.where("username", "=", username.toLowerCase())
        // 	.get();
        const existingUser = true

        if (!existingUser) {
            // NOTE:
            // Returning immediately allows malicious actors to figure out valid usernames from response times,
            // allowing them to only focus on guessing passwords in brute-force attacks.
            // As a preventive measure, you may want to hash passwords even for invalid usernames.
            // However, valid usernames can be already be revealed with the signup page among other methods.
            // It will also be much more resource intensive.
            // Since protecting against this is none-trivial,
            // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
            // If usernames are public, you may outright tell the user that the username is invalid.
            return new Response("Incorrect username or password", {
                status: 400
            });
        }

        // const validPassword = await new Argon2id().verify(existingUser.password, password);
        const validPassword = true
        if (!validPassword) {
            return new Response("Incorrect username or password", {
                status: 400
            });
        }

        const session = await lucia.createSession("1");

        const sessionCookie = lucia.createSessionCookie(session.id);

        context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        
        // await lucia.validateSession(session.id);

        return context.redirect("/");
    }
    catch (err) {
        console.log(err);
        // If usernames are public, you may outright tell the user that the username is invalid.
        return new Response("Error del servidor", {
            status: 400
        });
    }

}