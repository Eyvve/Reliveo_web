import axios from "axios";

//Add new user with role 'user'
export default function useSignUpUserStreamer() {
    return (email, username ,password , picture) => {
        return axios('https://reliveoapi.com/api/users', {
            method: "post",
            data: {
                email: email,
                username: username,
                password: password,
                photo: picture,
                roles: ["ROLE_DIFFUSEUR"]
            }

        })
            .then(res => res.data)
            .catch (error => console.log(error.response));
    }
}