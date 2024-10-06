import { error, redirect } from '@sveltejs/kit'
import { login } from '../../api/auth.api.js'

// export async function load({ cookies, locals}) {

//     return {
//         userdetails:  locals.user
//     }
// }


export const actions = {
    // default: async ({ cookies, request }) => {
    //     console.log("default")
    //     const data = await request.formData()
    //     const email = data.get('email')
    //     const password = data.get('password')
    //     console.log(email)
    //     console.log(password)
    // },
    login: async ({ cookies, request, locals }) => {
        const data = await request.formData()  //fetching data
        const username = data.get('username')
        const password = data.get('password')
        console.log(username)
        console.log(password)

        if (!username) {
            return error(400, { message: 'missing username' })
        }

        if (!password) {
            return error(400, { message: 'missing password' })
        }
        const res=await login(username.toString(),password.toString())
        const result=await res.json()
        // console.log(result?.id)

        if(!res.ok) {
            return error(400, { message: 'invalid username or password' })
        }

        cookies.set('auth', result.token, {path:'/'}) //=>cookie availabe throughout the domian and subdomain
        locals.user = result   //setting whole user
        locals.authToken = result.token   //setting token

        return redirect(302, "/") // =>redirecting to home page
    },

}


