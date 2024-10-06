

import { redirect } from "@sveltejs/kit";
import { FetchReciepeOne } from "../../../api/reciepe.api";

export const load = async({params, parent}) => {

    const layoutData = await parent()

    // console.log('mmmmmmm', layoutData?.user?.email)

    if(!layoutData?.user) {
        redirect(302, "/login")
    }

    const res = await FetchReciepeOne(+params?.id)

    // console.log("ressssssssssss")
    // console.log(res?.name)
    
    return{
        reciepe: res ? res : null
    }

}





