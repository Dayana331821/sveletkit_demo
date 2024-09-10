

import { FetchReciepeOne } from "../../../api/reciepe.api";

import type { PageLoad } from './$types';

export const load: PageLoad = async({params}) => {

    const res = await FetchReciepeOne(+params?.id)

    console.log("ressssssssssss")
    console.log(res)
    
    return{
        reciepe: res ? res : null
    }

}





