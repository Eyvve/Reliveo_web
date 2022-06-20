import {React, useState, useEffect} from 'react'
import ApplicationStep1 from './ApplicationStep1'
import ApplicationStep2 from './ApplicationStep2'
import ApplicationStep3 from './ApplicationStep3'
import ApplicationStep4 from './ApplicationStep4'
import ApplicationStep5 from './ApplicationStep5'
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import {ReactComponent as ReliveoLogo} from '../../Assets/ShowCase/reliveo_application_logo.svg'

import './StreamingApplication.scss'

function StreamingApplication() {

  useEffect(() => {
    console.log(localApplicationForm)
  });

  const [localApplicationForm, setLocalApplicationForm] = useState({
    eventType: "",
    streamerName: "",
    genreList: [],
    profilePicture: "",
    officialWebsite: "",
    description: "",
    identityProof: ""
  });

  return (
      <div className='Application'>
        <section className='Application__left'>
          <div className='Application__left_top'>
            <Link to="/" ><ReliveoLogo /></Link>
          </div>
          <ApplicationStep1 setLocalApplicationForm={setLocalApplicationForm}  />
          <ApplicationStep2 setLocalApplicationForm={setLocalApplicationForm} localApplicationForm={localApplicationForm}  />
          <ApplicationStep3 setLocalApplicationForm={setLocalApplicationForm}  />
          <ApplicationStep4 setLocalApplicationForm={setLocalApplicationForm}  />
          <ApplicationStep5 setLocalApplicationForm={setLocalApplicationForm}  />
          <Routes>
            <Route path="/streamingApplication" element={<ApplicationStep1 setLocalApplicationForm={setLocalApplicationForm}  />} />
          </Routes>
        </section>
        <section className='Application__right'>
          
        </section>
      </div>
  )
}

export default StreamingApplication