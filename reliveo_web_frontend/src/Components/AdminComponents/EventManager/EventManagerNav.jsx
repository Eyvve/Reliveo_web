import React from 'react'
import {Link} from 'react-router-dom'

function EventManagerNav() {
  return (
    <nav className='Admin__Manager_nav' >
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/eventManager/eventList">
            <div>Liste des évènements</div>
       </Link>
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/eventManager/eventApplications">
            <div>Liste des évènements en attente</div>
       </Link>
    </nav>
  )
}

export default EventManagerNav