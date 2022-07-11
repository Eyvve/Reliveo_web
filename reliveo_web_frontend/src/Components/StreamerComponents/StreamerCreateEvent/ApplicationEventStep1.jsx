import { React, useState, useEffect } from "react";
import "./EventApplication.scss";
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import * as jose from 'jose';
import { useNavigate } from "react-router-dom";
import useCreateEvent from "../../../Hooks/Post/useCreateEvent";
import useGetStreamerByUserId from "../../../Hooks/Get/useGetStreamerByUserId";
import useGetCookies from "../../../Hooks/Get/useGetCookie";
import { storage } from "../../../Firebase/firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage"

//create event request  
function ApplicationEventStep1() {
  const navigate = useNavigate();
  const createEvent = useCreateEvent();
  const getStreamer = useGetStreamerByUserId();
  let {ReliveoJwt} = useGetCookies();
  const [percent, setPercent] = useState(0);

  const [picture, setPicture] = useState([]);
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [banner, setBanner] = useState([]);
  const [streamerId, setStreamerId] = useState("")

  const [localForm, setLocalForm] = useState({
    longitude: "",
    latitude: "",
    name: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    rue: "",
    codepostal: "",
    ville: "",
    streamer: "",
    photo: "",
    banner: ""
  });

  const handleSubmit = () => {
    
    const storagePictureRef = ref(storage, `photoProfil/photo${picture[0].name}`)
    const uploadPictureTask = uploadBytesResumable(storagePictureRef, picture[0]);
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
                console.log(url);
                setLocalForm(prev => ({
                  ...prev,
                  photo: url
                }))
                setTrigger1(true)
            });
        })
      const storageBannerRef = ref(storage, `photoEvent/photo${banner[0].name}`)
      const uploadBannerTask = uploadBytesResumable(storageBannerRef, banner[0]);
      uploadBannerTask.on(
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
            getDownloadURL(uploadBannerTask.snapshot.ref).then((url) => {
                console.log(url);
                setLocalForm(prev => ({
                  ...prev,
                  banner: url
                }))
                setTrigger2(true)
            });
        })
        
        
  }

  useEffect(() => {
    console.log(localForm)
    if(trigger){
      createEvent(localForm)
      console.log("hello")
    }
  }, [trigger]);

  useEffect(() => {
    console.log("trigger 1 : " + trigger1)
    console.log("trigger 2 : " + trigger2)
    console.log("trigger : " + trigger)
    if(trigger1 == true && trigger2 == true){
      setTrigger(true)
      setTrigger1(false)
      setTrigger2(false)
    }
  }, [trigger1, trigger2]);

  // useEffect(() => {
  //   setLocalForm(prev => ({
  //     ...prev,
  //     banner: banner
  // }))
  // }, [banner]);

  useEffect(() => {
    const JWTdata = jose.decodeJwt(ReliveoJwt)
    getStreamer(JWTdata.userid)
      .then(data => setLocalForm(prev => ({
        ...prev,
        streamer: data[0].id
    })))
    
  }, [streamerId]);

  const handleChange = ({target}) => {
    console.log(localForm)
    setLocalForm(prev => ({
        ...prev,
        [target.name]: target.value
    }))
}

  const handlePrevious = (e) => {
    return navigate("/webapp/streamer");
  };

  const handleNext = (e) => {
    return navigate("/webapp/streamer/eventApplication/step2");
  };

  return (
    <div className="EventApplication__left_step">
      <div className="EventApplication__left_step_block">
        <h4 className="EventApplication__left_step_block_title">
          Programmer un évènement
        </h4>
        <br></br><br></br>
        <h5 className="EventApplication__left_step_block_subtitle">
          Informations
        </h5>
        <hr className="EventApplication__left_step_hr"></hr>

        <label htmlFor="" className="EventApplication__left_step_block_label">
          Nom du concert
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="évènement2022"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Longitude
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="55.950607"
          name="longitude"
          onChange={handleChange}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Latitude
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="-3.188641"
          name="latitude"
          onChange={handleChange}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Adresse du concert
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="23 rue de la paix"
          name="rue"
          onChange={handleChange}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Code postal
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="75010"
          name="codepostal"
          onChange={handleChange}
        />
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Ville
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="Paris"
          name="ville"
          onChange={handleChange}
        />
        <label className="EventApplication__left_step_block_label">
          Lien billeterie
        </label>
        <input
          type="text"
          className="EventApplication__left_step_block_input"
          placeholder="billeterie.com"
          onChange={handleChange}
        />
        <label className="EventApplication__left_step_block_label" >Date et heure de début</label>

        <input
          type="datetime-local"
          id="meeting-time"
          name="dateStart"
          min="2022-06-07T00:00"
          max="2023-06-14T00:00"
          className ="EventApplication__left_step_block_input_date"
          onChange={handleChange}
        ></input>

        <label className="EventApplication__left_step_block_label">Date et heure de fin</label>

        <input
          type="datetime-local"
          id="meeting-time"
          name="dateEnd"
          min="2022-06-07T00:00"
          max="2023-06-14T00:00"
          className ="EventApplication__left_step_block_input_date"
          onChange={handleChange}
        ></input>
        
        <br></br><br></br>
        <h5 className="EventApplication__left_step_block_subtitle">
          Médias
        </h5>
        <hr className="EventApplication__left_step_hr"></hr>


        <label className="EventApplication__left_step_block_label">Photo de l'événement</label>
        <Dropzone  onDrop={(acceptedFiles) => {
                  setPicture(acceptedFiles.map(file => Object.assign(file, {
                      preview: URL.createObjectURL(file)
                  })));
               }} name="heroImage" multiple={false}>
               {({getRootProps, getInputProps}) => (
                   <div {...getRootProps({className: 'dropzone'})} className='Application__left_step_dragndrop'>
                       <input {...getInputProps()} />
                       <p><strong>Déposez</strong> votre image ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
                   </div>
               )}
          </Dropzone>
          <img style={picture.length > 0 ? { width: "150px", height: "150px", margin: "0 auto", borderRadius: "90px", marginTop:"15px", display: "block" } : { width: "150px", height: "150px", margin: "0 auto", borderRadius: "90px", marginTop:"15px", display: "none" }} src={picture.length > 0 ? picture[0].preview : ""} alt="picture"/>

        <label className="EventApplication__left_step_block_label">Photo de bannière</label>
          <Dropzone  onDrop={(acceptedFiles) => {
                  setBanner(acceptedFiles.map(file => Object.assign(file, {
                      preview: URL.createObjectURL(file)
                  })));
               }} name="heroImage" multiple={false}>
               {({getRootProps, getInputProps}) => (
                   <div {...getRootProps({className: 'dropzone'})} className='Application__left_step_dragndrop'>
                       <input {...getInputProps()} />
                       <p><strong>Déposez</strong> votre image ici, ou <strong>cliquez</strong> pour importer via l'explorateur</p>
                   </div>
               )}
          </Dropzone>
          <img style={banner.length > 0 ? { width: "100%", height: "auto", margin: "0", marginTop:"15px", display: "block" }  : { width: "100%", height: "auto", margin: "0", marginTop:"15px", display: "none" }}src={banner.length > 0 ? banner[0].preview : ""} alt="banner"/>
            


        <br></br><br></br>
        <h5 className="EventApplication__left_step_block_subtitle">Détails</h5>
        <hr className="EventApplication__left_step_hr"></hr>
        <label htmlFor="" className="EventApplication__left_step_block_label">
          Description
        </label>
        <textarea
          className="EventApplication__left_step_block_input"
          placeholder="Description de l'évènement"
          name="description"
          rows="5" cols="50 "
          onChange={handleChange}
          style={ {height : "240px"}}
        />
        <div className="EventApplication__left_step_block_buttons">
          <button
            className="EventApplication__left_step_block_buttons_button next"
            onClick={handleSubmit}
          >
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationEventStep1;
