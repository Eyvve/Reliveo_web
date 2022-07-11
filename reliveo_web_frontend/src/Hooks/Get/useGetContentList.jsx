import axios from "axios";

export default function useGetContentList() {
  return ( ) => {
    return axios("https://reliveoapi.com/api/posts ", {
      method: "get",
    })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
  };
}