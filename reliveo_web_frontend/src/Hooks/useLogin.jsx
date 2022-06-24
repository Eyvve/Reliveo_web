import axios from "axios";

export default function useLogin() {
    return (username, password) => {
        // return axios.get('http://localhost:2345/login.php', {
        //     withCredentials: true,
        //     auth: {
        //         username: username,
        //         password: password
        //     }
        // })
        //     .then(res => res.data)
        console.log("username : " + username + ", password : " + password)
    }
}