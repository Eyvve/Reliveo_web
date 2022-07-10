import axios from "axios";

export default function useGetById() {
  // return (prop ) => {
    // return axios(`https://reliveoapi.com${prop}`, {
  return ( ) => {
    return axios(`https://reliveoapi.com/api/users`, {
      method: "get",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}