import React from "react";
import { Link } from "react-router-dom";
import "./streamerStyle.scss";
import { ReactComponent as Users } from "../../Assets/Streamer/bi_calendar-check-fill.svg";
import { ReactComponent as MyEvents } from "../../Assets/Streamer/cib_apple-music.svg";
import { ReactComponent as Streamers } from "../../Assets/Streamer/Vector.svg";
import { useState, useEffect } from 'react'

function StreamerSideBar() {
  const url = window.location.pathname;

  const [currentUrl, setCurrentUrl] = useState("");
  const [currentClick, setCurrentClick] = useState(false);

  const handleClick = () => {
    setCurrentClick(true);
    console.log(window.location.pathname)
    setCurrentUrl(window.location.pathname)
    console.log(currentUrl)
  }
  return (
    <>
      <div className="Streamer__sidebar">
        <nav className="Streamer__sidebar_container">
          <Link className={ "is_active" + (currentUrl === "/webapp/streamer/MyEventList" ? ' is_active_none' : '')+(currentUrl === "/webapp/streamer/StreamSetup" ? ' is_active_none' : '')} to={"/webapp/streamer/eventApplication/step1 "}>
            <Users />
            <p>Programmer un évènement</p>
          </Link>
          <Link className={ (currentUrl === "/webapp/streamer/MyEventList" ? ' is_active' : '')} to="/webapp/streamer/MyEventList" onClick={handleClick}>
            <MyEvents />
            <p>Mes événements</p>
          </Link>
          <Link className={ (currentUrl === "/webapp/streamer/StreamSetup" ? ' is_active' : '')} to="/webapp/streamer/StreamSetup" onClick={handleClick}>
            <Streamers />
            <p>Configuration du stream</p>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default StreamerSideBar;
