import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react';
import {Outlet} from 'react-router-dom'
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
          console.log("got token !")
          console.log(loggedUser)
          // if (myContext.userStatus != "" ){
            switch(loggedUser.userStatus){
              case "ROLE_ADMINISTRATEUR":
                return navigate("/webapp/admin/userManager/userList");
              case "ROLE_DIFFUSEUR":
                return navigate("/webapp/streamer/eventManager/eventList");
                case "ROLE_USER":
                  return navigate("/noAccess");
            }
          // }else{
            // console.log("reloading")
          // }
          
        } else {
          console.log("no token found")
        }
      }, 10);
      
    }, [loggedUser]);

  return (
    <Outlet />
  )
}

export default Webapp