import { lucia } from "./auth/lucia";
import { verifyRequestOrigin } from "lucia";
import { defineMiddleware } from "astro:middleware";
import { AuthAxios } from "./api/axios";
import { type BasicResponse } from "./types/API";
import type { UsuarioModel } from "./types/usuario.type";

export const onRequest = defineMiddleware(async (context:any, next:any) => {
	
	if (context.request.method !== "GET") {
		const originHeader = context.request.headers.get("Origin");
		const hostHeader = context.request.headers.get("Host");
		if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
			return new Response(null, {
				status: 403
			});
		}
	}

	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
	
	if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;
		return next();
	}

	const { session, user } = await lucia.validateSession(sessionId);
	
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}

	try
	{

		const formData = new FormData();
      
		formData.append('id', sessionId);

		const { data: { data } } = await AuthAxios.post<BasicResponse<UsuarioModel>>('/auth/validate-session', formData)

		context.locals.session = session;

		context.locals.user = data;

		console.log("sin error")

	}
	catch(err)
	{
		console.error(err)
		console.log("id", sessionId)
		context.locals.session = null;
		context.locals.user = null;
	}

	return next();

});