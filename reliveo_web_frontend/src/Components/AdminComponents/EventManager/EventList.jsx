import React from 'react';
import { streamer } from "../../../Data/fakeData";
import { ReactComponent as Detail } from "../../../Assets/Admin/detail.svg";
import { ReactComponent as CloseDetail } from "../../../Assets/Admin/close.svg";
import { ReactComponent as Image } from "../../../Assets/Admin/Rectangle.svg";
import useGetEventList from '../../../Hooks/Get/useGetEventList'
import { ReactComponent as TodayEvent } from "../../../Assets/Admin/todayEvent.svg";
import { useEffect, useState } from 'react';
import Moment from "moment"

function EventList() {
    //display detail of an event
    const getEventList = useGetEventList();

    const [events, setEvents] = useState([]);
    const [today, setToday] = useState("");

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
      getEventList()
          .then(data => setEvents(data))
  }, [events]);
  
    return (
      <div className="Admin__Manager_List">
        <div className="Admin__Manager_List_body">
          {events?.map((value) => {
              return (
                <>
                  <div key={value.id} className="Admin__Manager_List_body_event">
                    <div className="Admin__Manager_List_body_event_logoName">
                      <img
                        src={value.photo}
                        alt="image"
                        className="Admin__Manager_List_body_event_image"
                      />
                      <p>{value.name}</p>
                    </div>
                    <div>

                    <p  className="Admin__Manager_List_body_event_info">{Moment(value.dateStart).format('DD MM yyyy')} {Moment(value.dateStart).format('DD MM yyyy') == today ? <TodayEvent /> : ""}</p>
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
                    className="Admin__Manager_List_body_detail"
                    style={
                      displayDetail === value.id ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="Admin__Manager_List_body_detail_info">
                      <p>Heure de d??but : {Moment(value.dateStart).format('DD MMMM YYYY, h:mm:ss a')}</p>
                      <p>Adresse : {value.rue} {value.ville} </p>
                    </div>
                    <div className="Admin__Manager_List_body_detail_image">
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

export default EventList