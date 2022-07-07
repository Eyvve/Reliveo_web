import axios from "axios";

export default function useGetStreamerList() {
  return ( ) => {
    return axios("https://reliveoapi.com/api/streamers", {
      method: "get",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}