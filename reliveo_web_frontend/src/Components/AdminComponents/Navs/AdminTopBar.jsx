import React, {useState} from 'react'
import {ReactComponent as Logo} from '../../../Assets/Admin/ReliveoDashboardTop.svg'
import { useContext } from 'react';
import "../adminStyle.scss"
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import { LogContext } from '../../../Context/Contexts';

function AdminTopBar() {

  // const [user, setUser] = useState("Gigachad");

  const [loggedUser, setLoggedUser] = useContext(LogContext);

  return (
    <div className='Admin__topbar'>
      <nav className='Admin__topbar_container'>
        <Logo className='Admin__topbar_container_logo' />
        <div className='Admin__topbar_container_nav'>
          <div>Bonjour, {loggedUser.roles[0] == "ROLE_ADMINISTRATEUR" ? "Administeur" : "Diffuseur" } <strong>{loggedUser.username}</strong></div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img src={loggedUser.photo} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Profil</Dropdown.Item>
              <Dropdown.Item >Déconnexion</Dropdown.Item>
              <Dropdown.Item ><Link to="/" >Site vitrine</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  )
}

export default AdminTopBar