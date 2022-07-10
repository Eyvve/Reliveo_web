import axios from "axios";

//Add new user with role 'admin'
export default function useSignUpUser() {
    return (email, username ,password , picture) => {
        return axios('https://reliveoapi.com/api/users ', {
            method: "post",
            data: {
                email: email,
                username: username,
                password: password,
                photo: picture,
                }
                
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}