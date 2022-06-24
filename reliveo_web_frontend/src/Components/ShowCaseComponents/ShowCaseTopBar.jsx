import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as BrandLogo} from '../../Assets/ShowCase/reliveo_sc_logo.svg'
import {ReactComponent as AppStoreBadge} from '../../Assets/ShowCase/app_store_badge.svg'
import {ReactComponent as GooglePlayBadge} from '../../Assets/ShowCase/google_play_badge.svg'
// import './showcase.scss'

function ShowCaseTopBar() {
  return (
    <nav className="Showcase__TopBar">
      <Link to="/" ><BrandLogo className="Showcase__TopBar_logo" /></Link>
      <section className='Showcase__TopBar_nav'>
        <Link className='Showcase__TopBar_nav_text' to="/streamingApplication/step1" >DEVENIR DIFFUSEUR</Link>
        {/* <Link className='Showcase__TopBar_nav_text' to="/Login" >CONNEXION</Link> */}
        <Link className='Showcase__TopBar_nav_text' to="/webapp/admin/userManager" >CONNEXION</Link>
        <a href=''><AppStoreBadge className="Showcase__TopBar_nav_badge" /></a>
        <a href=''><GooglePlayBadge className="Showcase__TopBar_nav_badge" /></a>
      </section>
    </nav>
  )
}

export default ShowCaseTopBar