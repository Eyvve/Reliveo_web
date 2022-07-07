import axios from "axios";

//get  user with role reported
export default function useGetUserReported() {
  return () => {
    return axios("http://reliveoapi.com/api/users?status".efgeg, {
      method: "get",
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.response));
    // console.log("username : " + username + ", password : " + password)
  };
}
