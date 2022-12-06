import { Navigate } from "react-router-dom"

const saveToken = (token) => {
    localStorage.setItem("token", token)
}


const logOut = () => {
    localStorage.removeItem("token");
    return <Navigate to="/login"/>
}

const isAuthenticated = () => {
    let token = localStorage.getItem("token")
    return !!token
}

export const accountService = {saveToken, logOut, isAuthenticated}