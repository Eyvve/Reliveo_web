import {React} from 'react'
import {Link, Outlet} from 'react-router-dom'
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