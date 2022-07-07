import React from 'react';
import { streamer } from "../../../Data/fakeData";
import { ReactComponent as Detail } from "../../../Assets/Admin/detail.svg";
import { ReactComponent as CloseDetail } from "../../../Assets/Admin/close.svg";
import { ReactComponent as Image } from "../../../Assets/Admin/Rectangle.svg";
import useGetEventList from '../../../Hooks/Get/useGetEventList'
import { ReactComponent as TodayEvent } from "../../../Assets/Admin/todayEvent.svg";
import { useEffect, useState } from 'react';
function EventList() {
    //display detail of an event
    const getEventList = useGetEventList();
    const [displayDetail, setDisplayDetail] = useState(false);
    const handleViewDetail = () => {
      setDisplayDetail(true);
      console.log(displayDetail);
    };
    const  handleCloseViewDetail = () => {
      setDisplayDetail(false);
      console.log(displayDetail);
    }
  
    return (
      <div className="Admin__Manager_List">
        <div className="Admin__Manager_List_body">
          {streamer
            .filter((value) => value.acceptanceStatus == "accepted")
            .map((value) => {
              return (
                <>
                  <div className="Admin__Manager_List_body_event">
                    <div className="Admin__Manager_List_body_event_logoName">
                      <img
                        src="../../reliveo_web_frontend/public/logo192.png"
                        alt="image"
                        className="Admin__Manager_List_body_event_image"
                      />
                      <p>{"event name"}</p>
                    </div>
                    <div>

                    <p  className="Admin__Manager_List_body_event_info">{"dateTime event"} <TodayEvent /></p>
                    </div>
                    <Detail
                      className="pointing"
                      style={
                          displayDetail ? { display: "none" } : { display: "block" }
                        }
                      onClick={() => handleViewDetail()}
                    />
                    <CloseDetail
                      className="pointing"
                      style={
                          displayDetail ? { display: "block" } : { display: "none" }
                        }
                      onClick={() => handleCloseViewDetail()}
                    />
                  </div>
                  <div
                    className="Admin__Manager_List_body_detail"
                    style={
                      displayDetail ? { display: "block" } : { display: "none" }
                    }
                  >
                    <div className="Admin__Manager_List_body_detail_info">
                      <p>Heure de début : 21h</p>
                      <p>Adresse : 32 rue Gigaweb, Wiesen</p>
                      <p>Billeterie : Igorrr.fr</p>
                    </div>
                    <div className="Admin__Manager_List_body_detail_image">
                      <Image />
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