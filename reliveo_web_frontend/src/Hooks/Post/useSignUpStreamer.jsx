import axios from "axios";

//Add new user with role 'admin'
export default function useSignUpStreamer() {
    return (email, password) => {
        return axios('http://reliveoapi.com/api/streamer ', {
            method: "post",
            data: {
                email: email,
                password: password,
                role: 'streamers'

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}