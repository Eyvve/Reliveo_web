import axios from "axios";

//Login user 
export default function useLogin() {
    return (email, password) => {
        return axios('https://reliveoapi.com/authentication_token ', {
            method: "post",
            data: {
                email: email,
                password: password

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}