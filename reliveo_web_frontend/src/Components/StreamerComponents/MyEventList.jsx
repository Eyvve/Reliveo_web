import React from "react";
import { streamer } from "../../Data/fakeData";
import { ReactComponent as Detail } from "../../Assets/Streamer/detail.svg";
import { ReactComponent as CloseDetail } from "../../Assets/Streamer/close.svg";
import { ReactComponent as Image } from "../../Assets/Streamer/Rectangle.svg";
import { ReactComponent as TodayEvent } from "../../Assets/Streamer/todayEvent.svg";
import useGetEventOfOneStreamer from "../../Hooks/Get/useGetEventOfOneStreamer";
import { useState } from "react";

function MyEventList() {
  //display detail of an event
  const [displayDetail, setDisplayDetail] = useState(false);
  const myEvents = useGetEventOfOneStreamer();
  const handleViewDetail = () => {
    setDisplayDetail(true);
    console.log(displayDetail);
  };
  const  handleCloseViewDetail = () => {
    setDisplayDetail(false);
    console.log(displayDetail);
  }

  const handleDeleteEvent = () => {
    console.log("delete event");
  }

  return (
    <div className="Streamer__Manager_List">
      <h4 className="Streamer__Manager_List_title">Mes événements</h4>
      <div className="Streamer__Manager_List_body">
        {streamer
          .filter((value) => value.acceptanceStatus == "accepted")
          .map((value) => {
            return (
              <>
                <div className="Streamer__Manager_List_body_event">
                  <div className="Streamer__Manager_List_body_event_logoName">
                    <img
                      src="../../reliveo_web_frontend/public/logo192.png"
                      alt="image"
                      className="Streamer__Manager_List_body_event_image"
                    />
                    <p>{"event name"}</p>
                  </div>
                  <div>
                  <p className="Streamer__Manager_List_body_event_info">{"dateTime event"} <TodayEvent /></p>
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
                  className="Streamer__Manager_List_body_detail"
                  style={
                    displayDetail ? { display: "block" } : { display: "none" }
                  }
                >
                  <div className="Streamer__Manager_List_body_detail_info">
                    <p>Heure de début : 21h</p>
                    <p>Adresse : 32 rue Gigaweb, Wiesen</p>
                    <p>Billeterie : Igorrr.fr</p>
                  </div>
                  <div className="Streamer__Manager_List_body_detail_image">
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

export default MyEventList;
