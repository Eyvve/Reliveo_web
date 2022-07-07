import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function UserManagerNav() {
     const url = window.location.pathname;

     const [currentUrl, setCurrentUrl] = useState("");
     const [currentClick, setCurrentClick] = useState(false);

     const handleClick = () => {
          setCurrentClick(true);
          console.log(window.location.pathname)
          setCurrentUrl(window.location.pathname)
          console.log(currentUrl)
     }
     return (
          <nav className='Admin__Manager_nav' >
               <Link className={'Admin__Manager_nav_button is_active' + (currentUrl === "/webapp/admin/userManager/createUser" ? ' is_active_none' : '') + (currentUrl === "/webapp/admin/userManager/createAdmin" ? ' is_active_none' : '')} to="/webapp/admin/userManager/userList" onClick={handleClick}>
                    <div>Liste des utilisateurs</div>
               </Link>
               <Link className={'Admin__Manager_nav_button' + (currentUrl === "/webapp/admin/userManager/createUser" ? ' is_active' : '')} to="/webapp/admin/userManager/createUser" onClick={handleClick}>
                    <div>Créer un utilisateur</div>
               </Link>
               <Link className={'Admin__Manager_nav_button' + (currentUrl === "/webapp/admin/userManager/createAdmin" ? ' is_active' : '')} to="/webapp/admin/userManager/createAdmin" onClick={handleClick}>
                    <div>Créer un administrateur</div>
               </Link>
          </nav>
     )
}

export default UserManagerNav