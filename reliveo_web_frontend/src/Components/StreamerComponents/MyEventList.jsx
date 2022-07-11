import React, {useEffect, useState} from 'react'
import { useContext } from 'react';
import { ReactComponent as Detail } from "../../Assets/Streamer/detail.svg";
import { ReactComponent as CloseDetail } from "../../Assets/Streamer/close.svg";
import { ReactComponent as Image } from "../../Assets/Streamer/Rectangle.svg";
import { ReactComponent as TodayEvent } from "../../Assets/Streamer/todayEvent.svg";
import { LogContext } from "../../Context/Contexts";
import Moment from "moment";
import useGetEventListById from "../../Hooks/Get/useGetEventListById";
import useGetStreamerByUserId from "../../Hooks/Get/useGetStreamerByUserId";

function MyEventList() {
  ///display detail of an event
  const getEventList = useGetEventListById();
  const getStreamerData = useGetStreamerByUserId();

  const [events, setEvents] = useState([]);
  const [today, setToday] = useState("");
  const [streamerData, setStreamerData] = useState();

  const [loggedUser] = useContext(LogContext);

  const [displayDetail, setDisplayDetail] = useState(false);
  const handleViewDetail = (id) => {
    setDisplayDetail(id);
  };

  const  handleCloseViewDetail = () => {
    setDisplayDetail(false);
  }

  useEffect(() => {
    const date = Moment().format('DD MM yyyy')
    setToday(date)
  }, []);

  useEffect(() => {
    getStreamerData(loggedUser.userid).then(data => setStreamerData(data[0].id))
  })

  useEffect(() => {
    getEventList(streamerData)
        .then(data => setEvents(data))
  }, [events]);


  const handleDeleteEvent = () => {
    console.log("delete event");
  }

  return (
    <div className="Streamer__Manager_List">
      <h4 className="Streamer__Manager_List_title">Mes événements</h4>
      <div className="Streamer__Manager_List_body">
        {events?.map((value) => {
            return (
              <>
                <div key={value.id} className="Streamer__Manager_List_body_event">
                  <div className="Streamer__Manager_List_body_event_logoName">
                    <img
                      src={value.photo}
                      alt="image"
                      className="Streamer__Manager_List_body_event_image"
                    />
                    <p>{value.name}</p>
                  </div>
                  <div>
                  <p className="Streamer__Manager_List_body_event_info">{Moment(value.dateStart).format('DD MM yyyy')} {Moment(value.dateStart).format('DD MM yyyy') == today ? <TodayEvent /> : ""}</p>
                  </div>
                  <Detail
                    className="pointing"
                    style={
                        displayDetail === value.id ? { display: "none" } : { display: "block" }
                      }
                    onClick={() => handleViewDetail(value.id)}
                  />
                  <CloseDetail
                    className="pointing"
                    style={
                        displayDetail === value.id ? { display: "block" } : { display: "none" }
                      }
                    onClick={() => handleCloseViewDetail(value.id)}
                  />
                </div>
                <div
                  className="Streamer__Manager_List_body_detail"
                  style={
                    displayDetail === value.id ? { display: "block" } : { display: "none" }
                  }
                >
                  <div className="Streamer__Manager_List_body_detail_info">
                    <p>Heure de début : {Moment(value.dateStart).format('DD MMMM YYYY, h:mm:ss a')}</p>
                    <p>Adresse : {value.rue} {value.ville}</p>
                  </div>
                  <div className="Streamer__Manager_List_body_detail_image">
                    <img src={value.banner} />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default MyEventList;
