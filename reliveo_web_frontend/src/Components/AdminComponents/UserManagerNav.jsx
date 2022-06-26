import React from 'react'
import {Link} from 'react-router-dom'

function UserManagerNav() {
  return (
    <nav className='Admin__Manager_nav' >
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/userManager/userList">
            <div>Liste des utilisateurs</div>
       </Link>
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/userManager/createUser">
            <div>Créer un utilisateur</div>
       </Link>
    </nav>
  )
}

export default UserManagerNav