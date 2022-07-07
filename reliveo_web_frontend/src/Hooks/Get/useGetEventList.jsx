import axios from "axios";

export default function useGetEventList() {
  return ( ) => {
    return axios("https://reliveoapi.com/api/events ", {
      method: "get",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}