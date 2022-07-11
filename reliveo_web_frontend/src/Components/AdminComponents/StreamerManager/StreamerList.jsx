import React, {useEffect, useState} from 'react'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'
import useGetStreamerList from '../../../Hooks/Get/useGetStreamerList'
import useGetUsers from '../../../Hooks/Get/useGetUsers'
import useDeleteStreamer from '../../../Hooks/Delete/useDeleteStreamer'
import useDeleteById from '../../../Hooks/Delete/useDeleteById'

function StreamerList() {

    const DeleteUser = useDeleteById();
    const DeleteStreamer = useDeleteStreamer();
    const getStreamers = useGetStreamerList()
    const getUsers = useGetUsers()

    const [streamers, setStreamers] = useState([]);
    const [user, setUser] = useState([]);
    
    const handleDeleteStreamer = (prop) => {
        // console.log("diffuseur n°" + prop.id + " supprimé");
        // console.log("utilisateur " + prop.user + " supprimé");
        // DeleteStreamer(prop.id);
        DeleteUser(prop.user);
    }

    
    useEffect(() => {
        if(user.length == 0){
            getUsers().then(data => setUser(data))
        }
        console.log(user)
    }, [user]);
    
    useEffect(() => {
        getStreamers()
            .then(data => setStreamers(data))
    }, [streamers]);

  return (
    <div className='Admin__Manager_List '>
        <div className='Admin__Manager_List_head StreamerList'>
                <div>Id</div>
                <div>Nom</div>
                <div>Statut live</div>
                <div>Type</div>
                <div>Posts</div>
                <div>Genres</div>
                <div>Supprimer</div>
        </div>
        <section className='Admin__Manager_List_body'>
            {streamers?.filter(status => status.streamerStatus == "CONFIRMED").map(value => {
                return(
                    <>
                        <div key={value.id} className='Admin__Manager_List_body_row StreamerList'>
    
                            <div>{value.id}</div>
                            {/* <div>{value.user}</div> */}
                            <div>{user?.filter(key => "/api/users/" + key.id == value?.user)[0]?.username}</div>
                            <div>{value.liveStatus ? "online" : "offline"}</div>
                            <div>{value.eventsType}</div>
                            <div>{value.events.length}</div>
                            <div>{value.musicalGenres}</div>
                            <Delete className="pointing" onClick={() => handleDeleteStreamer(value)} />
                        </div>
                        
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default StreamerList
