import { redirect } from "@sveltejs/kit";
import { getAuthUserDetails } from "./api/auth.api";
import type { Auth } from "$lib/models/auth";

export async function handle({ event, resolve }) {

    event.locals.user = null
    event.locals.authToken = null

    const authToken = event.cookies.get('auth')

    console.log("authToken", authToken)

    if (authToken) {

        const res = await getAuthUserDetails(authToken);
        // console.log("res", res.ok)

        const user: Auth = await res.json()

        if (!res.ok) {
            return redirect(302, '/login')
        }

        event.locals.user = user
        event.locals.authToken = authToken
    }

    return resolve(event)
}