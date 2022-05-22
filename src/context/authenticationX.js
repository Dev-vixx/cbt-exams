import React, { createContext, useState } from 'react'
import Index from '../pages'
export const _AuthenticationX = createContext()

export default function AuthComponent({children}) {
    let [user, setUser] = useState({isLoggedIn:"false"})
  return (
    <_AuthenticationX.Provider value={user}>
         <Index user={user}/>
    </_AuthenticationX.Provider>
  )
}
