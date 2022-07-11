import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useCreateStreamer from "../../Hooks/Post/useCreateStreamer";
import useSignUpUser from "../../Hooks/Post/useSignUpUser";
import useSignUpUserStreamer from "../../Hooks/Post/useSignUpUserStreamer";

function ApplicationStep6({importedData, eventType, streamerName, genreList, officialWebsite, description, identityProof, importedEmailData}) {

  const navigate = useNavigate()
  const createUser = useSignUpUserStreamer()
  const createStreamer = useCreateStreamer()
  const [userId,setUserId] = useState()

  const handlePrevious = (e => {
    return navigate('/streamingApplication/step5')
  })

  const handleNext = (e => {
    return navigate('/streamingApplication/step7')
  })

  const handleApply = (e => {
    createUser(importedData.email, importedData.streamerName, importedData.password, importedData.profilePicture).then(data => setUserId(data.id))
      console.log(userId)
    createStreamer(importedData,userId)
  })


  return (
    <section className='Application__left_step'>
      <h1 className='Application__left_step_title'>Résumé</h1>
      <hr className='Application__left_step_hr'></hr>
      <br />

      <div className='Application__left_step_table'>
        <div>
            <tr>
                <td>Type d'évènement</td>
                <td>{eventType}</td>
            </tr>
            <tr>
                <td>Nom de diffuseur</td>
                <td>{streamerName}</td>
            </tr>
            <tr>
                <td>Genres musicaux</td>
                <td>{genreList.map((genre, index) => {
                   return <p key={index}>{genre.value}</p>
                })}</td>
            </tr>
            <tr>
                <td>Lien vers le site</td>
                <td>{officialWebsite}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{description}</td>
            </tr>
            <tr>
                <td>Preuve d'identité</td>
                <td>{identityProof[0]?.path}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{importedEmailData}</td>
            </tr>
        </div>
      </div>
      <br />

      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleApply}>
          Valider
        </button>
      </div>
    </section>
  );
}

export default ApplicationStep6