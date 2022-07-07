import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { useNavigate } from 'react-router-dom';

function ApplicationEventStep2({setLocalApplicationForm, importedPPData}) {

  const [files, setFiles] = useState([]);
    
  const navigate = useNavigate()

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  // const thumbs = files.map(file => (
  //   <div key={file.name}>
  //     <div >
  //       <img
  //         src={file.preview}
  //         // onLoad={() => { URL.revokeObjectURL(file.preview) }}
  //         onError={(event) => event.target.style.display = 'none'}
  //       />
  //     </div>
  //   </div>
  // ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    setFiles(importedPPData);
  }, []);

  useEffect(() => {
    setLocalApplicationForm(prev => ({
      ...prev,
      profilePicture: files
    }))
  }, [files]);
  
    const handlePrevious = (e => {
    return navigate('/webapp/streamer/eventApplication/step1')
    })

    const handleNext = (e => {
      return navigate('/webapp/streamer/eventApplication/step3')
    })

  return (
    
    <div className="EventApplication__left_step">
      <div className="EventApplication__left_step_block">
        <h4 className="EventApplication__left_step_block_title">
          Programmer un évènement
        </h4>
        <br></br>
        <h5 className="EventApplication__left_step_block_subtitle">
          Médias
        </h5>
        <hr className="EventApplication__left_step_hr"></hr>

      <label className="EventApplication__left_step_block_label">Photo de l’évènement</label>
      <div {...getRootProps()} className='Application__left_step_dragndrop'>
        <input className ="EventApplication__left_step_block_input" {...getInputProps()} />
        <p><strong>Déposez</strong> votre image ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
      </div>

      <label className="EventApplication__left_step_block_label">Photo de bannière</label>
      <div {...getRootProps()} className='Application__left_step_dragndrop'>
        <input className ="EventApplication__left_step_block_input" {...getInputProps()} />
        <p><strong>Déposez</strong> votre image ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
      </div>
        <br></br>
      <div className='EventApplication__left_step_block_buttons step2'>
        <button className='EventApplication__left_step_block_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='EventApplication__left_step_block_buttons_button next' 
        onClick={handleNext}>
          Suivant
        </button>
      </div>
      </div>
    </div>
  );
}

export default ApplicationEventStep2