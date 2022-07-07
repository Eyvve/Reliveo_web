import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationEventStep4({ localApplicationForm }) {
  //create event request
  const navigate = useNavigate();
  // const apply = useSubmitStreamerApplication()

  const handlePrevious = (e) => {
    return navigate("/webapp/streamer/eventApplication/step3");
  };

  const handleNext = (e) => {
    return navigate("/webapp/streamer/eventApplication/step1");
  };

  const handleSubmit = (e) => {
    // apply(localApplicationForm)
    //   .then(data => {
    //   console.log(data)
    return navigate("/webapp/streamer/eventApplication/step1");
  };

  useEffect(() => {
    console.log(localApplicationForm);
  }, []);

  return (
    <section className="EventApplication__left_step">
      <h4 className="EventApplication__left_step_block_title">
        Programmer un évènement
      </h4>
      <br></br>
      <h1 className="EventApplication__left_step_block_title step4">Événement soumis</h1>
      <hr className="EventApplication__left_step_block_hr"></hr>
      <br />

      <div className="EventApplication__left_step_block_message">
        <p>
          Notre équipe se chargera de valider votre événement dans les plus
          brefs delais.
        </p>
        <p>
          Vous recevrez un email de confirmation une fois la validation faite.
        </p>
      </div>
      <br />
      <br />
      <div className="EventApplication__left_step_block_buttons">
          <button
            className="EventApplication__left_step_block_buttons_button next"
            onClick={handleNext}
          >
            Retour sur la page d’accueil
          </button>
        </div>
    </section>
  );
}

export default ApplicationEventStep4;
