import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import Auth from '../utiles/Auth'
import redirect from 'react-router-dom';



const AuthenticatedRoutes = ({path, element}) => {
    const isAuthenticated = useContext(Auth) 

    return isAuthenticated ? (
        <Route path={path} element={element}/>
    ) : (
        <redirect to="/login"/>
    )
}

export default AuthenticatedRoutes