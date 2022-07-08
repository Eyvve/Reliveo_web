import React from 'react'
import { streamer } from '../../../Data/fakeData'
import {ReactComponent as Check} from '../../../Assets/Admin/check.svg'
import usePutStreamer from '../../../Hooks/Put/usePutStreamer'
function StreamerApplications() {
    const putStreamer = usePutStreamer();
    const handleAcceptStreamer = (prop) => {
        console.log("Diffuseur n°" + prop + " accepté");
        putStreamer();
    }

  return (
    <div className='Admin__Manager_List'>
        <div className='Admin__Manager_List_head StreamerApplication'>
                <div>Id</div>
                <div>StreamerName</div>
                <div>Statut</div>
                <div>Type</div>
                <div>Genres</div>
                <div>Email</div>
                <div>Site web</div>
        </div>
        <section className='Admin__Manager_List_body'>
            {streamer.filter(value => value.acceptanceStatus == "pending").map(value => {
                return(
                    <>
                        <div key={value.streamerId} className='Admin__Manager_List_body_row StreamerApplication'>
                            <div>{value.streamerId}</div>
                            <div>{value.streamerName}</div>
                            <div>{value.acceptanceStatus}</div>
                            <div>{value.type}</div>
                            <div>{value.musicalGenres}</div>
                            <div>{value.email}</div>
                            <div>{value.website}</div>
                            <div><Check className="pointing" onClick={() => handleAcceptStreamer(value.streamerId)} /></div>
                        </div>
                        
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default StreamerApplications