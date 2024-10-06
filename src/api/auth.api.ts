
import type { Auth } from "$lib/models/auth";


export const login = async (username: string, password: string) => {   //pass some sensitiive data
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  //server return res should be in json format
    body: JSON.stringify({
      username, password,
      expiresInMins: 30, 
    }),
    credentials: 'include'     //to include cookies in request
  })
  return res
}

export const getAuthUserDetails = async (AuthToken: string) => {
  const res = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + AuthToken },
    credentials: 'include'
  })
  return res
}