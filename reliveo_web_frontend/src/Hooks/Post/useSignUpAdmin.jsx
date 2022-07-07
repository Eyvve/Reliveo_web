import axios from "axios";

//Add new user with role 'admin'
export default function useSignUpAdmin() {
    return (email, password) => {
        return axios('https://reliveoapi.com/api/users ', {
            method: "post",
            data: {
                email: email,
                password: password,
                roles: ['Administrateur'],
                username: 'username',
                photo: "lienPhoto"

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}