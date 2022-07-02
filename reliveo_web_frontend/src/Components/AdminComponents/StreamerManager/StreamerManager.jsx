import React from 'react'
import StreamerManagerNav from './StreamerManagerNav'
import {Outlet} from 'react-router-dom'

function StreamerManager() {
  return (
    <div className='Admin__Manager'>
      <h4>Gestion des diffuseurs</h4>
      <StreamerManagerNav />
      <Outlet />
    </div>
  )
}

export default StreamerManager