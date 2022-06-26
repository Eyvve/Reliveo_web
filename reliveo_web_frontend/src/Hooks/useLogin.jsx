import axios from "axios";

export default function useLogin() {
    return (email, password) => {
        return axios('http://13.80.23.145/authentication_token', {
            method: "post",
            data: {
                email: email,
                password: password

            }
        })
            .then(res => res.data)
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}