import axios from "axios";

//Add new user with role 'admin'
export default function useCreateEvent() {
    return (data) => {
        return axios('http://reliveoapi.com/api/events ', {
            method: "post",
            data: {
                longitude: data.longitude,
                latitude: data.latitude,
                name: data.name,
                description: data.description,
                dateStart: data.dateStart,
                dateEnd: data.dateEnd,
                eventStartingHour: data.dateStart,
                rue: data.rue,
                codepostal: data.codepostal,
                ville: data.ville,
                streamer: "/api/streamers/" + data.streamer,
                photo: data.photo,
                banner: data.banner,
                qrcode: ""+Math.floor(Math.random() * 999)

            }
        })
            .then(res => console.log(res.data))
            .catch (error => console.log(error.response));
        // console.log("username : " + username + ", password : " + password)
    }
}