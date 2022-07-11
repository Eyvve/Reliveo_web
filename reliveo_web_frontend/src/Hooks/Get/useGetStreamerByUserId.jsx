import axios from "axios";

export default function useGetStreamerByUserId() {
    return (id) => {
        return axios(`http://reliveoapi.com/api/streamers?user=/api/users/${id}`, {
            method: "get",
        })
            .then(res => res.data)
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}