import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { useNavigate } from 'react-router-dom';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../Firebase/firebaseConfig";

function ApplicationStep3({setLocalApplicationForm, importedPPData}) {

  const [files, setFiles] = useState([]);
    
  const navigate = useNavigate()
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [percent, setPercent] = useState(0);

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
          // onLoad={() => { URL.revokeObjectURL(file.preview) }}
          onError={(event) => event.target.style.display = 'none'}
        />
      </div>
    </div>
  ));

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
    return navigate('/streamingApplication/step2')
    })

    const handleSubmit = async (e) => {
        const storagePictureRef = ref(storage, `photoProfil/photo${files.name}`)
        const uploadPictureTask = uploadBytesResumable(storagePictureRef, files[0]);
        uploadPictureTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
                console.log(percent)
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadPictureTask.snapshot.ref).then((url) => {
                    setLocalApplicationForm(prev => ({
                        ...prev,
                        profilePicture: url
                    }))
                });
            })

        await handleNext(e);
    }

    const handleNext = (e) => {
        return navigate('/streamingApplication/step4')
    }

  return (
    <section className='Application__left_step'>
      <h1 className='Application__left_step_title'>Devenez diffuseur</h1>
      <br></br>
      <h3 className='Application__left_step_subtitle'>Image de profil</h3>
      <hr className='Application__left_step_hr'></hr>
      <div className='Application__left_step_previewContainer' >
        {thumbs}
      </div>
      <br></br>
      <div {...getRootProps()} className='Application__left_step_dragndrop'>
        <input {...getInputProps()} />
        <p><strong>Déposez</strong> votre image ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
      </div>
      <br /><br />
      <div className='Application__left_step_buttons'>
        <button className='Application__left_step_buttons_button previous' 
        onClick={handlePrevious}>
          Précédent
        </button>
        <button className='Application__left_step_buttons_button next' 
        onClick={handleSubmit}>
          Suivant
        </button>
      </div>
    </section>
  );
}

export default ApplicationStep3