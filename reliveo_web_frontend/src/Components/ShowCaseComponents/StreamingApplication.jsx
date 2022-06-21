import {React, useState, useEffect} from 'react'
import ApplicationStep1 from './ApplicationStep1'
import ApplicationStep2 from './ApplicationStep2'
import ApplicationStep3 from './ApplicationStep3'
import ApplicationStep4 from './ApplicationStep4'
import ApplicationStep5 from './ApplicationStep5'
import {Routes, Link, Route, Outlet} from 'react-router-dom'
import {ReactComponent as ReliveoLogo} from '../../Assets/ShowCase/reliveo_application_logo.svg'

import './StreamingApplication.scss'

function StreamingApplication() {


  return (
      <div className='Application'>
        <section className='Application__left'>
          <div className='Application__left_top'>
            <Link to="/" ><ReliveoLogo /></Link>
          </div>
          <Outlet />
        </section>
        <section className='Application__right'>
          
        </section>
      </div>
  )
}

export default StreamingApplication