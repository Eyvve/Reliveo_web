import React from 'react'
import {Link} from 'react-router-dom'

function ContentManagerNav() {
  return (
    <nav className='Admin__Manager_nav' >
       <Link className='Admin__Manager_nav_button' to="/webapp/admin/contentManager/contentList">
            <div>Liste des contenus</div>
       </Link>
    </nav>
  )
}

export default ContentManagerNav