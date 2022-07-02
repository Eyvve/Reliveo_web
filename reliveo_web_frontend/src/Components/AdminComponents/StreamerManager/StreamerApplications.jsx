import React from 'react'
import { streamer } from '../../../Data/fakeData'
import {ReactComponent as Check} from '../../../Assets/Admin/check.svg'

function StreamerApplications() {
    
    const handleAcceptStreamer = (prop) => {
        console.log("Diffuseur n°" + prop + " accepté")
    }

  return (
    <table className='Admin__Manager_List'>
        <thead className='Admin__Manager_List_head'>
            <tr>
                <th>streamerId</th>
                <th>streamerName</th>
                <th>count</th>
                <th>acceptanceStatus</th>
                <th>status</th>
                <th>type</th>
                <th>musicalGenres</th>
                <th>email</th>
                <th>website</th>
                {/* <th>description</th> */}
            </tr>
        </thead>
        <tbody className='Admin__Manager_List_body'>
            {streamer.filter(value => value.acceptanceStatus == "pending").map(value => {
                return(
                    <>
                        <tr key={value.streamerId}>
                            <td>{value.streamerId}</td>
                            <td>{value.streamerName}</td>
                            <td>{value.totalcontentCount}</td>
                            <td>{value.acceptanceStatus}</td>
                            <td>{value.status}</td>
                            <td>{value.type}</td>
                            <td>{value.musicalGenres}</td>
                            <td>{value.email}</td>
                            <td>{value.website}</td>
                            <td>{value.postDate}</td>
                            {/* <td>{value.description}</td> */}
                            <td><Check className="pointing" onClick={() => handleAcceptStreamer(value.streamerId)} /></td>
                        </tr>
                        
                    </>
                )
            })}
        </tbody>
    </table>
  )
}

export default StreamerApplications