import React from 'react'
import {Link} from 'react-router-dom'
import "../adminStyle.scss"
import {ReactComponent as Users} from '../../../Assets/Admin/users.svg'
import {ReactComponent as Content} from '../../../Assets/Admin/content.svg'
import {ReactComponent as Streamers} from '../../../Assets/Admin/streamers.svg'
import {ReactComponent as Events} from '../../../Assets/Admin/events.svg'
import {ReactComponent as Accueil} from '../../../Assets/Admin/accueil.svg'
import { useState, useEffect } from 'react'
import useReactPath from '../../../Hooks/useReactPath'
function AdminSideBar() {

  const url = window.location.pathname;

  const [currentUrl, setCurrentUrl] = useState("");
  const [currentClick, setCurrentClick] = useState(false);
  const path = useReactPath();

  const handleClick = () => {
    setCurrentClick(true);
    console.log(window.location.pathname)
    setCurrentUrl(window.location.pathname)
    console.log(currentUrl)
  }
  return (
    <>
    <div className='Admin__sidebar'>
      <nav className='Admin__sidebar_container'>
        <Link to="/">
          <Accueil />
          <p>Accueil</p>
        </Link>
        <Link to="/webapp/admin/userManager/userList" onClick={handleClick}>
          <Users className={'Admin__sidebar_container_link ' + (currentUrl !== "/webapp/admin/userManager/userList" ? ' is_active_none' : 'is_active')} />
          <p className={'Admin__sidebar_container_title'+ (currentUrl === "/webapp/admin/userManager/userList" ? ' is_active' : '')} >Utilisateurs</p>
        </Link>
        {/* <Link to="/webapp/admin/userManager/userList" onClick={handleClick}>
          <Users className={'Admin__sidebar_container_link '} style={currentUrl === "/webapp/admin/userManager/userList" ?  {filter: 'invert(60%) sepia(68%) saturate(2232%) hue-rotate(241deg) brightness(100%) contrast(102%)'} : ''}/>
          <p className={'Admin__sidebar_container_title'+ (currentUrl === "/webapp/admin/userManager/userList" ? ' is_active' : '')} >Utilisateurs</p>
        </Link> */}
        <Link to="/webapp/admin/contentManager/contentList" onClick={handleClick}>
          <Content className={'Admin__sidebar_container_link ' + (currentUrl === "/webapp/admin/contentManager/contentList" ? ' is_active' : '')} />
          <p  className={'Admin__sidebar_container_title'+ (currentUrl === "/webapp/admin/contentManager/contentList" ? ' is_active' : '')}>Contenu</p>
        </Link>
        <Link to="/webapp/admin/streamerManager/streamerList" onClick={handleClick}>
          <Streamers className={'Admin__sidebar_container_link ' + (currentUrl === "/webapp/admin/streamerManager/streamerList" ? ' is_active' : '')} />
          <p  className={'Admin__sidebar_container_title'+ (currentUrl === "/webapp/admin/streamerManager/streamerList" ? ' is_active' : '')}>Diffuseurs</p>
        </Link>
        <Link to="/webapp/admin/eventManager/eventList" onClick={handleClick}>
          <Events className={'Admin__sidebar_container_link ' + (currentUrl === "/webapp/admin/eventManager/eventList" ? ' is_active' : '')} />
          <p  className={'Admin__sidebar_container_title'+ (currentUrl === "/webapp/admin/eventManager/eventList" ? ' is_active' : '')}>Evenements</p>
        </Link>
      </nav>
    </div>
    </>
  )
}

export default AdminSideBar