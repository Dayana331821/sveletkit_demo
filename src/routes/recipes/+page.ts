
import { FetchReciepes } from "../../api/reciepe.api";
import type { PageLoad } from './$types';

export const load: PageLoad = async() => {
    const res = await FetchReciepes()
    
    return{
        recipes: res?.recipes || []
    }

    
}




    
