import React from 'react'
import ApplicationStep1 from './ApplicationStep1'
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import {ReactComponent as ReliveoLogo} from '../../Assets/ShowCase/reliveo_application_logo.svg'

import './StreamingApplication.scss'

function StreamingApplication() {
  return (
    <div className='Application'>
      <section className='Application__left'>
        <div className='Application__left_top'>
          <Link to="/" ><ReliveoLogo /></Link>
        </div>
        <ApplicationStep1 />
        <Routes>
          <Route path="/streamingApplication/step1" element={<ApplicationStep1 />} />
          {/* <Route path="/streamingApplication/step2" element={<ApplicationStep2 />} />
          <Route path="/streamingApplication/step3" element={<ApplicationStep3 />} />
          <Route path="/streamingApplication/step4" element={<ApplicationStep4 />} />
          <Route path="/streamingApplication/step5" element={<ApplicationStep5 />} /> */}
        </Routes>
      </section>
      <section className='Application__right'>
        
      </section>
    </div>
  )
}

export default StreamingApplication