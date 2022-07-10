import React from "react"

export const LogContext = React.createContext({
    status: "error",
    userid: "",
    username: "",
    email: "",
    photo: "",
    roles: []
  })