import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ApplicationStep5({setLocalApplicationForm}) {
    
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    email: "",
    password: '',
  });

  const handleChange = ({target}) => {
    setLocalApplicationForm(prev => ({
        ...prev,
        [target.name]: target.value
    }))
}
  
  const handlePrevious = (e => {
  return navigate('/streamingApplication/step4')
  })

  const handleNext = (e => {
    return navigate('/streamingApplication/step6')
  })

  return (
    <section className='Application__left_step'>
      <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
      <br></br>
      <h3 className='Application__left_step_subtitle'>Email</h3>
      <input className='Application__left_step_inputText' type="email" name="email" onChange={handleChange} />
      <br></br>
      <h3 className='Application__left_step_subtitle'>Mot de passe</h3>
      <input className='Application__left_step_inputText' type="password" name="password" onChange={handleChange} />
      <br></br>
      <br></br>
      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleNext}>
          Résumé
        </button>
      </div>
    </section>
  );
}

export default ApplicationStep5