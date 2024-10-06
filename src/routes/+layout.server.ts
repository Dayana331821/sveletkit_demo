
export const load = async ({ locals }) => {

    // console.log("aaaa", locals?.user?.id)

    return {
        user: locals.user,
        authToken: locals.user?.token,
    }
}





