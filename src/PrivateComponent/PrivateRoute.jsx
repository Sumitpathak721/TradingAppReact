import React from 'react'
import { useAuth } from '../context/auth'
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRoute() {
  const [auth,setAuth] = useAuth()
  if (!auth.user) return <Navigate to="/login" />;
  return <Outlet/>
}

export default PrivateRoute