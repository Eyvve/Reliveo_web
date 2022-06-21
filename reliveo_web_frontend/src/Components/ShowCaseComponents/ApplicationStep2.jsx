import {React, useState, useEffect} from 'react'
import Select from 'react-select'

import { musicalGenres } from '../../Data/data';

function ApplicationStep2({localApplicationForm, setLocalApplicationForm}) {
    const [localMusicalGenre, setLocalMusicalGenre] = useState([]);

    useEffect(() => {
      setLocalApplicationForm(prev => ({
        ...prev,
        genreList: localMusicalGenre
      }))
      },[localMusicalGenre]);

    const handleStreamerNameChange = (e => {
      setLocalApplicationForm(prev => ({
          ...prev,
          streamerName: e.target.value
        }))
    })

    const renderSwitch = (param) =>{
      switch(param){
      case 'festival' :
        return <h3 className='Application__left_step_subtitle'>Nom du festival</h3> ;
      case 'musicalArtist' :
        return <h3 className='Application__left_step_subtitle'>Nom du groupe ou de l'artiste</h3>;
      default :
        return <h3 className='Application__left_step_subtitle'>Nom de diffuseur</h3>
    }}

  return (
    <div className='Application__left_step'>
        {renderSwitch(localApplicationForm.eventType)}
        <hr className='Application__left_step_hr'></hr>
        <input type="text" name="streamerName" onChange={handleStreamerNameChange} />
        <br></br><br></br>
          <br></br>
        <h3 className='Application__left_step_subtitle'>Genre(s) musical/aux</h3>
        <hr className='Application__left_step_hr'></hr>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={musicalGenres}
          onChange={setLocalMusicalGenre}
            />
        <br></br><br></br>
          <br></br>
    </div>
  )
}

export default ApplicationStep2