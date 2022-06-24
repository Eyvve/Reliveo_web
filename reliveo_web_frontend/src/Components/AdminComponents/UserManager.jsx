import React, {useEffect} from 'react'
import UserManagerNav from './UserManagerNav'
import {Outlet} from 'react-router-dom'

function UserManager() {

  return (
    <div className='Admin__userManager'>
      <h4>Gestion des utilisateurs</h4>
      <UserManagerNav />
      <Outlet />
    </div>
  )
}

export default UserManager