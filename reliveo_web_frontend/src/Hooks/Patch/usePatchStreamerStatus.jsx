import axios from "axios";

export default function useDeleteStreamer() {
     return (id ) => {
        return axios(`http://reliveoapi.com/api/streamers/${id}`, {
            method: 'PATCH',
            headers : { "Content-Type": 'application/merge-patch+json' },
            data: {
                streamerStatus: "CONFIRMED"
            }
        })
        .catch(error => console.log(error.message))
    }
}