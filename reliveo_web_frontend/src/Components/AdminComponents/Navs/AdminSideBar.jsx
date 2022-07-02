import React from 'react'
import {Link} from 'react-router-dom'
import "../adminStyle.scss"
import {ReactComponent as Users} from '../../../Assets/Admin/users.svg'
import {ReactComponent as Content} from '../../../Assets/Admin/content.svg'
import {ReactComponent as Streamers} from '../../../Assets/Admin/streamers.svg'
import {ReactComponent as Events} from '../../../Assets/Admin/events.svg'

function AdminSideBar() {
  return (
    <>
    <div className='Admin__sidebar'>
      <nav className='Admin__sidebar_container'>
        <Link to="/webapp/admin/userManager/userList">
          <Users />
          <p>Utilisateurs</p>
        </Link>
        <Link to="/webapp/admin/contentManager/contentList">
          <Content />
          <p>Contenu</p>
        </Link>
        <Link to="/webapp/admin/streamerManager/streamerList">
          <Streamers />
          <p>Diffuseurs</p>
        </Link>
        <Link to="/webapp/admin/eventManager/eventList">
          <Events />
          <p>Evenements</p>
        </Link>
      </nav>
    </div>
    </>
  )
}

export default AdminSideBar