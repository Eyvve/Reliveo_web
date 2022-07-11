import axios from "axios";

export default function useDeleteStreamer() {
  return (id ) => {
    return axios("https://reliveoapi.com/api/streamers/"+ id , {
      method: "delete",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}