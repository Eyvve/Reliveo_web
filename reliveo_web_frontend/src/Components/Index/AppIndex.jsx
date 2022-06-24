import React from 'react'
import {Outlet} from 'react-router-dom'

function AppIndex() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AppIndex