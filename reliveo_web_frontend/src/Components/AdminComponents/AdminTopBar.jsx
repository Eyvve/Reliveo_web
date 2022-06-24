import React, {useState} from 'react'
import {ReactComponent as Logo} from '../../Assets/Admin/ReliveoDashboardTop.svg'
import "./adminStyle.scss"
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'

function AdminTopBar() {

  const [user, setUser] = useState("Gigachad");
  const [picture, setPicture] = useState("https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/84428eae99c40b78a6d7dccd6805fc76~c5_720x720.jpeg?x-expires=1656122400&x-signature=bYJi5cQf5i38He9MRTdW37cB1ik%3D");


  return (
    <div className='Admin__topbar'>
      <nav className='Admin__topbar_container'>
        <Logo className='Admin__topbar_container_logo' />
        <div className='Admin__topbar_container_nav'>
          <div>Bonjour, Administeur <strong>{user}</strong></div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img src={picture} />
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