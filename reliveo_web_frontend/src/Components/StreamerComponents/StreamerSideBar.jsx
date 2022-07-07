import React from "react";
import { Link } from "react-router-dom";
import "./streamerStyle.scss";
import { ReactComponent as Users } from "../../Assets/Streamer/bi_calendar-check-fill.svg";
import { ReactComponent as MyEvents } from "../../Assets/Streamer/cib_apple-music.svg";
import { ReactComponent as Streamers } from "../../Assets/Streamer/Vector.svg";

function StreamerSideBar() {
  return (
    <>
      <div className="Streamer__sidebar">
        <nav className="Streamer__sidebar_container">
          <Link to="/webapp/streamer/eventApplication/step1">
            <Users />
            <p>Programmer un évènement</p>
          </Link>
          <Link to="/webapp/streamer/MyEventList">
            <MyEvents />
            <p>Mes événements</p>
          </Link>
          <Link to="/webapp/streamer/StreamSetup">
            <Streamers />
            <p>Configuration du stream</p>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default StreamerSideBar;
