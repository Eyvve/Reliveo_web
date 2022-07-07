import React from 'react'
import StreamerSideBar from './StreamerSideBar';
import StreamerTopBar from './StreamerTopBar';
import {Outlet} from 'react-router-dom'

function StreamerPage() {
  return (
    <div className='Streamer'>
        <StreamerTopBar />
        <div className='Streamer__container'>
          <StreamerSideBar />
          <Outlet />
        </div>
    </div>
  )
}

export default StreamerPage