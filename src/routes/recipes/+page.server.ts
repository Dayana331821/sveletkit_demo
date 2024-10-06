
import { redirect } from "@sveltejs/kit";
import { FetchReciepes } from "../../api/reciepe.api";

export const load = async(event) => {

    // console.log("dddd", event.locals?.user?.id)

    if(!event.locals.user) {
        redirect(302, "/login")
    } 

    const res = await FetchReciepes()
    
    return{
        recipes: res?.recipes || []
    }

    
}




    
