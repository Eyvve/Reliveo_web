import React from 'react'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'
import { streamer } from '../../../Data/fakeData'
import useDeleteUser from '../../../Hooks/Delete/useDeleteUser'

function StreamerList() {

    const DeleteUser = useDeleteUser();
    const handleDeleteStreamer = (prop) => {
        console.log("diffuseur n°" + prop + " supprimé");
        DeleteUser();
    }

  return (
    <table className='Admin__Manager_List '>
        <div className='Admin__Manager_List_head StreamerList'>
                <div>Id</div>
                <div>Nom</div>
                <div>Posts</div>
                <div>Statut</div>
                <div>Statut live</div>
                <div>Type</div>
                <div>Genres</div>
                <div>Email</div>
        </div>
        <section className='Admin__Manager_List_body'>
            {streamer.filter(value => value.acceptanceStatus == "accepted").map(value => {
                return(
                    <>
                        <div key={value.streamerId} className='Admin__Manager_List_body_row StreamerList'>
                            <div>{value.streamerId}</div>
                            <div>{value.streamerName}</div>
                            <div>{value.totalcontentCount}</div>
                            <div>{value.acceptanceStatus}</div>
                            <div>{value.status}</div>
                            <div>{value.type}</div>
                            <div>{value.musicalGenres}</div>
                            <div>{value.email}</div>
                            {/* <td>{value.website}</td> */}
                            {/* <td>{value.description}</td> */}
                            <Delete className="pointing" onClick={() => handleDeleteStreamer(value.streamerId)} />
                        </div>
                        
                    </>
                )
            })}
        </section>
    </table>
  )
}

export default StreamerList