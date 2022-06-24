import React from 'react'
import '../ShowCaseComponents/StreamingApplication.scss'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'
import {ReactComponent as ReliveoLogo} from '../../Assets/ShowCase/reliveo_application_logo.svg'

function Login({setLocalUser, needsLogin, setNeedsLogin, loggedUser}) {
  return (
    <div className='Application'>
        <section className='Application__left'>
          <div className='Application__left_top'>
            <Link to="/" ><ReliveoLogo /></Link>
          </div>
          <LoginForm loggedUser={loggedUser} setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin} />
        </section>
        <section className='Application__right'>
        </section>
      </div>
  )
}

export default Login