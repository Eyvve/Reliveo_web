import React from 'react'
import ContentManagerNav from './ContentManagerNav'
import {Outlet} from 'react-router-dom'

function ContentManager() {
  return (
    <div className='Admin__Manager'>
      <h4>Gestion du contenu</h4>
      <ContentManagerNav />
      <Outlet />
    </div>
  )
}

export default ContentManager