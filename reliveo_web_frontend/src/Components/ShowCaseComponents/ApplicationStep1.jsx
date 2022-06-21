import {React, useState, useEffect} from 'react'
import './StreamingApplication.scss'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

import { eventType } from '../../Data/data'


function ApplicationStep1({setLocalApplicationForm, importedData}) {

  
  const navigate = useNavigate()

  const [localEventType, setlocalEventType] = useState({value: 'default', label: "Select..."});

  const handlePrevious = (e => {
    return navigate('/')
  })

  const handleNext = (e => {
    return navigate('/streamingApplication/step2')
  })

  useEffect(() => {
    console.log(localEventType)
    setLocalApplicationForm(prev => ({
          ...prev,
          eventType: localEventType
        }))
  },[localEventType]);

  useEffect(() => {
    setlocalEventType(importedData)
  },[]);

  return (
    <div className='Application__left_step'>
      <div>
        <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
        <br></br>
        <h3 className='Application__left_step_subtitle'>Selectionnez le type de diffuseur</h3>
        <hr className='Application__left_step_hr'></hr>
        <Select className='Application__left_step_selector'
          options={eventType}
          value={localEventType}
          onChange={setlocalEventType}
        />
        <br></br>
        <div className='Application__left_step_buttons'>
          <button className='Application__left_step_buttons_button previous' 
            onClick={handlePrevious}>
              Page d'accueil
          </button>
          <button className='Application__left_step_buttons_button next' 
            onClick={handleNext}>
              Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationStep1