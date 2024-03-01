import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <>
    <div>
        This is Header
    </div>
    <Outlet/>
    <div>
        This is Footer
    </div>
    </>
  )
}

export default Layout