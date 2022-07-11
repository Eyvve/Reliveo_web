import axios from "axios";

//Add new user with role 'admin'
export default function useCreateStreamer() {
    return (data,id) => {
        return axios('https://reliveoapi.com/api/streamers', {
            method: "post",
            data: {
                streamerStatus: "PENDING",
                liveStatus: false,
                eventsType: data.eventType[0],
                events_type: data.eventType[0],
                musicalGenres: data.genreList,
                streamerWebsite : data.officialWebsite,
                streamerDescription: data.description,
                user: "/api/users/"+id
            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
    }
}