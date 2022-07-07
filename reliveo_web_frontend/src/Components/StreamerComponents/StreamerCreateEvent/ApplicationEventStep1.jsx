import { React, useState, useEffect } from "react";
import "./EventApplication.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { eventType } from "../../../Data/data";

//create event request  
function ApplicationEventStep1({ setLocalApplicationForm, importedData }) {
  const navigate = useNavigate();

  const [localEventType, setlocalEventType] = useState({
    value: "default",
    label: "Select...",
  });

  const handlePrevious = (e) => {
    return navigate("/webapp/streamer");
  };

  const handleNext = (e) => {
    return navigate("/webapp/streamer/eventApplication/step2");
  };

  useEffect(() => {
    console.log(localEventType);
    setLocalApplicationForm((prev) => ({
      ...prev,
      eventType: localEventType,
    }));
  }, [localEventType]);

  useEffect(() => {
    setlocalEventType(importedData);
  }, []);

  return (
    <div className="EventApplication__left_step">
      <div className="EventApplication__left_step_block">
        <h4 className="EventApplication__left_step_block_title">
          Programmer un évènement
        </h4>
        <br></br>
        <h5 className="EventApplication__left_step_block_subtitle">
          Informations
        </h5>
        <hr className="EventApplication__left_step_hr"></hr>

        <label htmlFor="" className="EventApplication__left_step_block_label">
          Nom du concert
        </label>
        <input
          className="EventApplication__left_step_block_input"
          placeholder="évènement2022"
          name="EventApplication__left_step_input"
          onChange={setlocalEventType}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Adresse du concert
        </label>
        <input
          className="EventApplication__left_step_block_input"
          placeholder="23 rue de la paix, 75010 Paris"
          onChange={setlocalEventType}
        />
        <label className="EventApplication__left_step_block_label">
          Lien billeterie
        </label>
        <input
          className="EventApplication__left_step_block_input"
          placeholder="billeterie.com"
          onChange={setlocalEventType}
        />
        <label className="EventApplication__left_step_block_label" >Date et heure de début</label>

        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value="2022-06-13T10:15"
          min="2022-06-07T00:00"
          max="2023-06-14T00:00"
          className ="EventApplication__left_step_block_input_date"
        ></input>

        <label className="EventApplication__left_step_block_label">Date et heure de fin</label>

        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value="2022-06-13T18:15"
          min="2022-06-07T00:00"
          max="2023-06-14T00:00"
          className ="EventApplication__left_step_block_input_date"
        ></input>
        <br></br>
        <div className="EventApplication__left_step_block_buttons">
          <button
            className="EventApplication__left_step_block_buttons_button next"
            onClick={handleNext}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationEventStep1;
