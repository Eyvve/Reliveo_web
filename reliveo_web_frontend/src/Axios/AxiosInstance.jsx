import axios from "axios";
import React from 'react'
import { useEffect } from "react";

function AxiosInstance() {

    useEffect(() => {
        console.log("appel axios")
    }, []);

  return (
    <div></div>
  )
}

export default AxiosInstance