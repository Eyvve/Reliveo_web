import axios from "axios";

//Add new user with role 'admin'
export default function useSignUpUser() {
    return (email, password, username, type, picture) => {
        return axios('https://reliveoapi.com/api/users ', {
            method: "post",
            data: {
                email: email,
                password: password,
                username: username,
                type: type,
                picture: picture,
                role: ['streamers']

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}