import {React, useState, useEffect} from 'react'
import './StreamingApplication.scss'
import Select from 'react-select'

import { eventType } from '../../Data/data'


import {Redirect} from 'react-router-dom'

function ApplicationStep1({setLocalApplicationForm}) {

  const [localEventType, setlocalEventType] = useState("");

  // useEffect(() => {
  //     console.log(localEventType.value)
  // });

  useEffect(() => {
    setLocalApplicationForm(prev => ({
          ...prev,
          eventType: localEventType.value
        }))
  },[localEventType]);

  return (
    <div className='Application__left_step'>
      <div>
        <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
        <br></br>
        <h3 className='Application__left_step_subtitle'>Selectionnez le type de diffuseur</h3>
        <hr className='Application__left_step_hr'></hr>
        <Select className='Application__left_step_selector'
          options={eventType}
          onChange={setlocalEventType}/>
          <br></br>
        {/* <button className='Application__left_step1_button' onClick={setlocalEventType}>Suivant</button> */}
      </div>
    </div>
  )
}

export default ApplicationStep1