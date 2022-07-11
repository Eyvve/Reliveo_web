import axios from "axios";

export default function useGetEventListById() {
    return (id) => {
        return axios(`https://reliveoapi.com/api/events?streamer=/api/streamers/2`, {
            method: "get",
        })
            .then((res) => res.data)
            .catch((error) => console.log(error.response));
    };
}