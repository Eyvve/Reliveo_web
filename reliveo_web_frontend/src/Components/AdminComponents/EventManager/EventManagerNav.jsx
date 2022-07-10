import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function EventManagerNav() {
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
      <Link className={'Admin__Manager_nav_button is_active' + (currentUrl === "/webapp/admin/eventManager/eventListPending" ? ' is_active_none' : '')} to="/webapp/admin/eventManager/eventList" onClick={handleClick}>
        <div>Liste des évènements</div>
      </Link>
      {/* <Link className={'Admin__Manager_nav_button' + (currentUrl === "/webapp/admin/eventManager/eventListPending" ? ' is_active' : '')} to="/webapp/admin/eventManager/eventListPending" onClick={handleClick}>
        <div>Liste des évènements en attente</div>
      </Link> */}
    </nav>
  )
}

export default EventManagerNav