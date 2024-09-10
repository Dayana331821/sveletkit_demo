
import type { Reciepe,ReciepeList } from "$lib/models/reciepe";

export const FetchReciepes=async()=>{
    const res = await fetch('https://dummyjson.com/recipes')
    return (await res.json()) as ReciepeList

}


export const FetchReciepeOne=async(id:number)=>{
    const res = await fetch('https://dummyjson.com/recipes/'+id)
    return (await res.json() )as Reciepe

}