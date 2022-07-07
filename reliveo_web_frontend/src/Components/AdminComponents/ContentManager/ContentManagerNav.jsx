import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
function ContentManagerNav() {
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
       <Link className='Admin__Manager_nav_button is_active' to="/webapp/admin/contentManager/contentList" onClick={handleClick}>
            <div>Liste des contenus</div>
       </Link>
    </nav>
  )
}

export default ContentManagerNav