import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function ApplicationStep5({eventType, streamerName, genreList, profilePicture, officialWebsite, description, identityProof}) {

  const navigate = useNavigate()

  const [tempGenreList, setTempGenreList] = useState();

  const handlePrevious = (e => {
    return navigate('/streamingApplication/step4')
  })

  const handleNext = (e => {
    return navigate('/streamingApplication/step6')
  })

  useEffect(() => {
    console.log(tempGenreList)
    setTempGenreList(genreList)
  }, []);

  return (
    <section className='Application__left_step'>
      <h1 className='Application__left_step_title'>Résumé</h1>
      <hr className='Application__left_step_hr'></hr>
      <br />

      <table>
        <tbody>
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
                <td>{tempGenreList?.map((genre, index) => {
                   <p key={index}>{genre.value}</p>
                })}</td>
            </tr>
            <tr>
                <td>Image de profil</td>
                <td>{profilePicture}</td>
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
                <td>{identityProof}</td>
            </tr>
        </tbody>
      </table>

      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleNext}>
          Valider
        </button>
      </div>
    </section>
  );
}

export default ApplicationStep5