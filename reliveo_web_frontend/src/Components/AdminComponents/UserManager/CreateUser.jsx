import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import useSignUpUser from "../../../Hooks/Post/useSignUpUser";
import { storage } from "../../../Firebase/firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage"

function CreateUser() {
  const SignUp = useSignUpUser();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [postTrigger, setpostTrigger] = useState("");
  const [percent, setPercent] = useState(0);
  const [localInput, setLocalInput] = useState({
    username: "",
    email: "",
    password: "",
    picture: "",
  });

  
  useEffect(() => {
    document.title = "Reliveo | Créer utilisateur";
  }, []);
  
  useEffect(() => {
    console.log(localInput)
  }, [localInput]);

  useEffect(() => {
    console.log(files)
  }, [files]);


  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div >
        <img
          src={file.preview}
          onError={(event) => event.target.style.display = 'none'}
        />
      </div>
    </div>
  ));

  
  const handleChange = ({target}) => {
    setLocalInput(prev => ({
        ...prev,
        [target.name]: target.value
    }))
}

  useEffect(() => {
    setLocalInput(prev => ({
      ...prev,
      picture: files[0]?.preview
    }))
  }, [files]);

  useEffect(() => {
    if (postTrigger != ""){
      SignUp(localInput.email, localInput.username, localInput.password, postTrigger)
    }
  }, [postTrigger]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("createUser")
    const storageRef = ref(storage, `photoProfil/photo${files[0].name}`)
    const uploadTask = uploadBytesResumable(storageRef, files[0]);
    uploadTask.on(
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
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setpostTrigger(url)
            });
        }
    ); 

  }
  return (
    <form onSubmit={handleSubmit} className="Admin__left_step">
      <div className="Admin__left_step_block">
        <label className="Admin__left_step_block_label">
          Nom d'utilisateur
        </label>
        <input
          className="Admin__left_step_block_input"
          placeholder="Nom d'utilisateur"
          name="username"
          onChange={handleChange}
        />
        <p>{percent}</p>
        <label className="Admin__left_step_block_label">
          Adresse mail
        </label>
        <input
          className="Admin__left_step_block_input"
          placeholder="Adresse mail"
          name="email"
          onChange={handleChange}
        />
        <label className="Admin__left_step_block_label">
          Mot de Passe
        </label>
        <input
          className="Admin__left_step_block_input"
          placeholder="Mot de passe"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <label className="Admin__left_step_block_label">
        Type d’utilisateur
        </label>
        <select name="type" className="Admin__left_step_block_input" >
          <option value="Classique">Classique</option>
          <option value="Partenaire">Partenaire</option>
        </select>
        {/* <label  className="Admin__left_step_block_label">
          Type d'utilisateur
        </label> */}
        {/* <Select
          className="EventApplication__left_step_block_input"
          name="Email"
        /> */}

        <label className="Admin__left_step_block_label">
          Photo de Profil
        </label>
        <div className='Application__left_step_previewContainer' >
        {thumbs}
        </div>
        <div {...getRootProps()} className="Admin__left_step_dragndrop">
          <input
            className="Admin__left_step_block_input"

            {...getInputProps()}
            // onChange={handleChangePicture}
          />
          <p>
            <strong>Déposez</strong> votre image ici, ou{" "}
            <strong>cliquez</strong> pour importer via l'explorateur
          </p>
        </div>
        <div className="Admin__left_step_block_buttons ">
          <button
            className="Admin__left_step_block_buttons_button next"
            type="submit"
          >
            Créer l’utilisateur
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateUser;
