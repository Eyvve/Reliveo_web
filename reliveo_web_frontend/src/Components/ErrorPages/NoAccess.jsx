import React from 'react'
import { useContext } from 'react';
import * as jose from 'jose';
import { LogContext } from '../../Context/Contexts';


import useGetCookie from '../../Hooks/Get/useGetCookie'
import { useEffect } from 'react';

function NoAccess({setLoggedUser}) {
    
  const [localLoggedUser, setLocalLoggedUser] = useContext(LogContext);

    let cookies = useGetCookie()
    let jwt = cookies.ReliveoJwt

    useEffect(() => {
        if(localLoggedUser.username == ""){
            setLocalLoggedUser(jose.decodeJwt(jwt))
    
            console.log(localLoggedUser)
        }
    }, []);

  return (
    <div>
    {/* <video src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"} autoPlay="true" /> */}
    </div>
  )
}

export default NoAccess