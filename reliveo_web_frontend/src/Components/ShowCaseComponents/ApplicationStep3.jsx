import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'

function ApplicationStep3({setLocalApplicationForm}) {

  const [files, setFiles] = useState([]);
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
  
  const thumbs = files.map(file => (
    <div key={file.name}>
      <div >
        <img
          src={file.preview}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          onError={(event) => event.target.style.display = 'none'}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    setLocalApplicationForm(prev => ({
      ...prev,
      profilePicture: files
    }))
  }, [files]);

  return (
    <section className='Application__left_step'>
      <h3 className='Application__left_step_subtitle'>Image de profil</h3>
      <hr className='Application__left_step_hr'></hr>
      <div className='Application__left_step_previewContainer'>
        {thumbs}
      </div>
      <br></br>
      <div {...getRootProps()} className='Application__left_step_dragndrop'>
        <input {...getInputProps()} />
        <p><strong>Déposez</strong> vos fichiers ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
      </div>
    </section>
  );
}

export default ApplicationStep3