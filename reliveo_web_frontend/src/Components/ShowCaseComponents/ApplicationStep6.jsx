import React from 'react'
import { useNavigate } from 'react-router-dom';

function ApplicationStep6({ localApplicationForm}) {

  const navigate = useNavigate()

  const handlePrevious = (e => {
    return navigate('/streamingApplication/step4')
  })

  const handleSubmit = (e => {
    return navigate('/')
  })

  return (
    <section className='Application__left_step'>
      <h1 className='Application__left_step_title'>Merci pour votre candidature</h1>
      <hr className='Application__left_step_hr'></hr>
      <br />
      <div className='Application__left_step_message'>
        <h4>Notre équipe se chargera de valider votre candidature dans les plus brefs delais.</h4>
        <h4>Vous recevrez un email contenant vos identifiants si votre application est retenue.</h4>
        <h4>Nous vous joindrons dans les plus brefs délais. </h4>
      </div>
      <br /><br />
      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleSubmit}>
          Page d'accueil
        </button>
      </div>
    </section>
  );
}

export default ApplicationStep6