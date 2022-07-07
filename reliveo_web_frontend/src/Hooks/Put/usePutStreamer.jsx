import axios from "axios";

//Add new user with role 'admin'
export default function usePutStreamer() {
    return (status) => {
        return axios('https://reliveoapi.com/api/streamer ', {
            method: "put",
            data: {
                status: status,

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}