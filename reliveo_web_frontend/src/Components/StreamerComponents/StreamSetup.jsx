import React from "react";
import { ReactComponent as Copy } from "../../Assets/Streamer/Copy.svg";
import useGetUsers from "../../Hooks/Get/useGetUsers";

function StreamSetup() {
  console.log(window.location.pathname);
  const getConfigurationStream = useGetUsers();
  const handleCopyUrlStream = () => {
    navigator.clipboard.writeText("ValueUrlStream")
  };
  const handleCopyKeyStream = () => {
    navigator.clipboard.writeText("ValueKeyStream")
  };
  return (
    <div className="Streamer__setup">
      <h4>Configuration de stream</h4>
      <div className="Streamer__setup_info">
        <p>URL de Stream</p>
        <div className="Streamer__setup_info_key">
          <input
            type={"dddddddddddd"}
            value="rtmp://20.101.107.33/4bab06ad-cd97-4839-9199-7129893e6e3a.stream"
            name="UrlDeStream"
          ></input>
          <Copy className="pointing" onClick={() => handleCopyUrlStream()} />
        </div>
      </div>
      <div className="Streamer__setup_info">
        <p>Clé de stream</p>
        <div className="Streamer__setup_info_key">
          <input
            type={"dddddddddddd"}
            value="yy+K@DoPuz$09UuS%ZAm"
            name="UrlDeStream"
          ></input>
          <Copy className="pointing" onClick={() => handleCopyKeyStream()} />
        </div>
      </div>
    </div>
  );
}

export default StreamSetup;
