import React from 'react'
import AdminSideBar from './AdminSideBar';
import AdminTopBar from './AdminTopBar';
import {Outlet} from 'react-router-dom'

function AdminPage() {
  return (
    <div className='Admin'>
        <AdminTopBar />
        <div className='Admin__container'>
          <AdminSideBar />
          <Outlet />
        </div>
    </div>
  )
}

export default AdminPage