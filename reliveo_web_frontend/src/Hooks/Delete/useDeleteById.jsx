import axios from "axios";

export default function useGetById() {
  // return (prop ) => {
    // return axios(`https://reliveoapi.com${prop}`, {
  return ( prop) => {
    return axios(`https://reliveoapi.com${prop}`, {
      method: "delete",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}