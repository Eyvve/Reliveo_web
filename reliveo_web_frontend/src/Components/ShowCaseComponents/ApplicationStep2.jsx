import {React, useState, useEffect} from 'react'

function ApplicationStep2({localApplicationForm, setLocalApplicationForm}) {

    const [localStreamerName, setLocalStreamerName] = useState("");

    // useEffect(() => {
    //     setLocalApplicationForm(prev => ({
    //           ...prev,
    //           streamerName: localStreamerName.value
    //         }))
    //   },[localStreamerName]);

      const handleChange = (e => {
        setLocalApplicationForm(prev => ({
            ...prev,
            streamerName: e.target.value
          }))
      })

  return (
    <div className='Application__left_step'>
        {localApplicationForm.eventType == "festival" ?
        <h3 className='Application__left_step_subtitle'>Nom du festival</h3> :
        <h3 className='Application__left_step_subtitle'>Nom du groupe ou de l'artiste</h3>
        }
        <hr className='Application__left_step_hr'></hr>
        <input type="text" name="streamerName" onChange={handleChange} />
    </div>
  )
}

export default ApplicationStep2