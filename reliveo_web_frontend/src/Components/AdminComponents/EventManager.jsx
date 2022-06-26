import React from 'react'
import EventManagerNav from './EventManagerNav'
import {Outlet} from 'react-router-dom'

function EventManager() {
  return (
    <div className='Admin__Manager'>
      <h4>Gestion des évènements</h4>
      <EventManagerNav />
      <Outlet />
    </div>
  )
}

export default EventManager