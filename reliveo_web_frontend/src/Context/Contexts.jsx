import React from "react"

export const LogContext = React.createContext({
    status: "error",
    token: "",
    username: "",
    userStatus: "",
  })