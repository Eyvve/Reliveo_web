import React from 'react'
import {Link} from 'react-router-dom'

function StreamerManagerNav() {
  return (
    <nav className='Admin__Manager_nav' >
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/streamerManager/streamerList">
            <div>Liste des diffuseurs</div>
       </Link>
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/streamerManager/streamerApplications">
            <div>Liste des diffuseurs en attente</div>
       </Link>
    </nav>
  )
}

export default StreamerManagerNav