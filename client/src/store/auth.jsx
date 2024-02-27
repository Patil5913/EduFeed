import React, { useContext } from 'react'
import {createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const storeTokenInLs=(serverToken)=>{
        return localStorage.setItem("token",serverToken)
    }

    return <AuthContext.Provider value={{storeTokenInLs}}>
    {children}
    </ AuthContext.Provider >
}
export const useAuth = ()=>{
    
    return useContext(AuthContext)
}