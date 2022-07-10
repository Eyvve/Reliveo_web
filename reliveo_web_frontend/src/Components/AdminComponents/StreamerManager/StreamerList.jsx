import React, {useEffect, useState} from 'react'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'
import useDeleteUser from '../../../Hooks/Delete/useDeleteUser'
import useGetStreamerList from '../../../Hooks/Get/useGetStreamerList'
import useGetUsers from '../../../Hooks/Get/useGetUsers'

function StreamerList() {

    const DeleteUser = useDeleteUser();
    const getStreamers = useGetStreamerList()
    const getUsers = useGetUsers()

    const [streamers, setStreamers] = useState([]);
    const [user, setUser] = useState([]);

    const handleDeleteStreamer = (prop) => {
        console.log("diffuseur n°" + prop + " supprimé");
        DeleteUser();
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
            {streamers.map(value => {
                return(
                    <>
                        <div key={value.id} className='Admin__Manager_List_body_row StreamerList'>
    
                            <div>{value.id}</div>
                            <div>{value.user}</div>
                            {/* <div>{user?.filter(key => "/api/users/" + key.id == value?.user)[0]['username']}</div> */}
                            <div>{value.liveStatus}</div>
                            <div>{value.eventsType}</div>
                            <div>{value.events.length}</div>
                            <div>{value.musicalGenres}</div>
                            <Delete className="pointing" onClick={() => handleDeleteStreamer(value.streamerId)} />
                        </div>
                        
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default StreamerList