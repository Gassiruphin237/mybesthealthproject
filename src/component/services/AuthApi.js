import React from 'react'
import { Navigate } from 'react-router-dom'
import { accountService } from './account.service'

function AuthApi({view}) {
if (!accountService.isAuthenticated()) {
    return <Navigate to="/login"/>
}
  return view()
}

export default AuthApi