import React from 'react'
import { useAuth } from '../context/auth'
import { Navigate } from 'react-router-dom'

function Register() {
  const [auth,setAuth] = useAuth()
  if(!auth.user) return <Navigate to="/" />
  return (
    <div>Register</div>
  )
}

export default Register