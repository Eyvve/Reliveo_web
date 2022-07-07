import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function StreamerManagerNav() {
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
      <Link className={'Admin__Manager_nav_button is_active' + (currentUrl === "/webapp/admin/streamerManager/streamerApplications" ? ' is_active_none' : '')} to="/webapp/admin/streamerManager/streamerList" onClick={handleClick}>
        <div>Liste des diffuseurs</div>
      </Link>
      <Link className={'Admin__Manager_nav_button' + (currentUrl === "/webapp/admin/streamerManager/streamerApplications" ? ' is_active' : '')} to="/webapp/admin/streamerManager/streamerApplications" onClick={handleClick}>
        <div>Liste des diffuseurs en attente</div>
      </Link>
    </nav>
  )
}

export default StreamerManagerNav