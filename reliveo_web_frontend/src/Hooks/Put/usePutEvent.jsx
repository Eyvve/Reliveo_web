import axios from "axios";

//Add new user with role 'admin'
export default function usePutEvent() {
    return (status) => {
        return axios('https://reliveoapi.com/api/events ', {
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