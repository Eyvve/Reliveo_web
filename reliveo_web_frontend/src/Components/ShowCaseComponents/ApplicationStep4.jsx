import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

function ApplicationStep4({setLocalApplicationForm, importedProofData, importedDescriptionData, importedLinkData}) {

  const navigate = useNavigate()

  const handleWebsiteLinkChange = (e => {
    setLocalApplicationForm(prev => ({
      ...prev,
      officialWebsite: e.target.value
    }))
  })

  const handleDescriptionChange = (e => {
    setLocalApplicationForm(prev => ({
      ...prev,
      description: e.target.value
    }))
  })

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'application/pdf': []
    },
    // onDrop: acceptedFiles => {
    //   setFile(acceptedFiles.map(file => Object.assign(file, {
    //     preview: URL.createObjectURL(file)
    //   })))
    // },  
    maxFiles: 3
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path} className="fileList success">
      {file.path}
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path} className="fileList error cleanedList">
      {/* {file.path} */}
      <ul>
        {errors.map(e => (
          <li key={e.code} className='cleanedList'>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  useEffect(() => {
    setLocalApplicationForm(prev => ({
      ...prev,
      identityProof: acceptedFiles
    }))
  }, [acceptedFiles]);
  
  const handlePrevious = (e => {
    return navigate('/streamingApplication/step3')
    })

  const handleNext = (e => {
    return navigate('/streamingApplication/step5')
  })

  return (
    <div className='Application__left_step'>
      <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
      <br></br>

      <h3 className='Application__left_step_subtitle'>Site officiel</h3>
      <hr className='Application__left_step_hr'></hr>
      <input value={importedLinkData} className='Application__left_step_inputText' type="text" name="officialWebsite" onChange={handleWebsiteLinkChange} />
      <br></br>

      <h3 className='Application__left_step_subtitle'>Fournissez une description</h3>
      <hr className='Application__left_step_hr'></hr>
      <textarea value={importedDescriptionData} name="streamerName" onChange={handleDescriptionChange} className='Application__left_step_textfield'/>
      <br></br>

      <h3 className='Application__left_step_subtitle'>Justificatif</h3>
      <hr className='Application__left_step_hr'></hr>
      <div {...getRootProps()} className='Application__left_step_dragndrop' >
        <input {...getInputProps()}/>
        <p><strong>Déposez</strong> votre fichier ici, ou <strong>cliquez</strong> pour l'importer via l'explorateur</p>
        <small>(Seuls les *.pdf seront acceptés)</small>
      </div>
      <aside>
        <ul>{acceptedFileItems}</ul>
        <ul><small>{fileRejectionItems}</small></ul>
      </aside>

      <br />
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
    </div>
  )
}

export default ApplicationStep4