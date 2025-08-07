import { useSelector } from "react-redux"

import React from "react"
import { Navigate } from "react-router"
import { ourStoreType } from "../lib/store"

export default function AuthRoute({children} : {children : React.ReactNode}) {
    const { token } = useSelector(((state: ourStoreType) => state.authsilce))
    if (token) {
        return children
    }
    return <Navigate to='/login'/>
}
