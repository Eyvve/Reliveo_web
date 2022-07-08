import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import useSignUpAdmin from "../../../Hooks/Post/useSignUpAdmin";
//create Admin
function CreateAdmin() {
  const SignUp = useSignUpAdmin();
  useEffect(() => {
    document.title = "Reliveo | Créer administrateur";
  }, []);
  
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
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
  const handleChange = (e) => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("createAdmin ");

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
          name="pseudo"
          onChange={handleChange}
        />
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
          name="username"
          type="password"
          onChange={handleChange}
        />
        <label className="Admin__left_step_block_label">
          Photo de Profil
        </label>
        <div {...getRootProps()} className="Admin__left_step_dragndrop">
          <input
            className="Admin__left_step_block_input"
            {...getInputProps()}
            onChange={handleChange}
          />
          <p>
            <strong>Déposez</strong> votre image ici, ou{" "}
            <strong>cliquez</strong> pour importer via l'explorateur
          </p>
        </div>
        <br></br>
        <div className="Admin__left_step_block_buttons ">
          <button
            className="Admin__left_step_block_buttons_button next"
            type="submit"
          >
            Créer l’administrateur
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateAdmin;