import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import useGetCookies from "../Hooks/Get/useGetCookie";
import { LogContext } from "../Context/Contexts";

function Webapp() {

  const navigate = useNavigate()
  const cookies = useGetCookies();

  const [loggedUser, setLoggedUser] = useContext(LogContext);

    useEffect(() => {
      setTimeout(() => {
        if (Object.keys(cookies).includes("ReliveoJwt")) {
          // if (myContext.userStatus != "" ){
            switch(loggedUser.roles[0]){
              case "ROLE_ADMINISTRATEUR":
                return navigate("/webapp/admin/userManager/userList");
              case "ROLE_DIFFUSEUR":
                return navigate("/webapp/streamer/eventApplication/step1")
              default:
                // return navigate("/");
            }
        }
      }, 10);
      
    }, [loggedUser]);

  return (
    <Outlet />
  )
}

export default Webapp