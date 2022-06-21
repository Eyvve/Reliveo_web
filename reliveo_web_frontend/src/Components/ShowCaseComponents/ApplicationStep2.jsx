import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

import { musicalGenres } from '../../Data/data';


function ApplicationStep2({localApplicationForm, setLocalApplicationForm, importedGenreData, importedNameData}) {
    const [localMusicalGenre, setLocalMusicalGenre] = useState([]);
    
    const navigate = useNavigate()

    useEffect(() => {
      setLocalApplicationForm(prev => ({
        ...prev,
        genreList: localMusicalGenre
      }))
      },[localMusicalGenre]);


    useEffect(() => {
      setLocalMusicalGenre(importedGenreData)
    },[]);

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

    const handlePrevious = (e => {
    return navigate('/streamingApplication/step1')
    })

    const handleNext = (e => {
      return navigate('/streamingApplication/step3')
    })

  return (
    <div className='Application__left_step'>
      <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
      <br></br>
      {renderSwitch(localApplicationForm.eventType.value)}
      <hr className='Application__left_step_hr'></hr>
      <input value={importedNameData}  className='Application__left_step_inputText' type="text" name="streamerName" onChange={handleStreamerNameChange} />
      <br></br><br></br>
        <br></br>
      <h3 className='Application__left_step_subtitle'>Genre(s) musical/aux</h3>
      <hr className='Application__left_step_hr'></hr>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={musicalGenres}
        value={importedGenreData}
        onChange={setLocalMusicalGenre}
          />
          <br></br>
          <br></br>
      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleNext}>
          Suivant
        </button>
      </div>
        
    </div>
  )
}

export default ApplicationStep2