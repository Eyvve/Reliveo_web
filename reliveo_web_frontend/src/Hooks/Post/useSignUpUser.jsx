import axios from "axios";

//Add new user with role 'admin'
export default function useSignUpUser() {
    return (email, password) => {
        return axios('https://reliveoapi.com/api/user ', {
            method: "post",
            data: {
                email: email,
                password: password,
                role: ['streamers']

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}