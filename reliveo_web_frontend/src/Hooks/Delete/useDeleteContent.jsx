import axios from "axios";

export default function useDeleteContent() {
  return (id ) => {
    return axios("http://reliveoapi.com/api/posts/"+ id , {
      method: "delete",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}