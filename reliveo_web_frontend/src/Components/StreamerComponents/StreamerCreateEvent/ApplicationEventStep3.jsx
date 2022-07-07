import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

function ApplicationEventStep3({ setLocalApplicationForm, importedPPData }) {
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
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    setFiles(importedPPData);
  }, []);

  useEffect(() => {
    setLocalApplicationForm((prev) => ({
      ...prev,
      profilePicture: files,
    }));
  }, [files]);

  const handlePrevious = (e) => {
    return navigate("/webapp/streamer/eventApplication/step2");
  };

  const handleNext = (e) => {
    return navigate("/webapp/streamer/eventApplication/step4");
  };

  return (
    <div className="EventApplication__left_step">
      <div className="EventApplication__left_step_block">
        <h4 className="EventApplication__left_step_block_title">
          Programmer un évènement
        </h4>
        <br></br>
        <h5 className="EventApplication__left_step_block_subtitle">Détails</h5>
        <hr className="EventApplication__left_step_hr"></hr>
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Description
        </label>
        <textarea
          className="EventApplication__left_step_block_input"
          placeholder="Description de l'évènement"
          name="EventApplication__left_step_input"
          rows="5" cols="50 "
          style={ {height : "240px"}}
        />
        <br></br>
        <div className="EventApplication__left_step_block_buttons step3">
          <button
            className="EventApplication__left_step_block_buttons_button next"
            onClick={handleNext}
          >
            soumettre l’événement
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationEventStep3;
