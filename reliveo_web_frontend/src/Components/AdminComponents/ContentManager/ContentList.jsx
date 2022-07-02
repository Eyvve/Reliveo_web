import React, {useEffect} from 'react'
import { content } from '../../../Data/fakeData'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'

function ContentList() {
    
    const handleDeleteContent = (prop) => {
        console.log("contenu n°" + prop + " supprimé")
    }

  return (
    <table className='Admin__Manager_List'>
                <thead className='Admin__Manager_List_head'>
                    <tr>
                        <th>contentId</th>
                        <th>AppId</th>
                        <th>userName</th>
                        <th>eventName</th>
                        <th>streamerName</th>
                        <th>postDate</th>
                    </tr>
                </thead>
                <tbody className='Admin__Manager_List_body'>
                    {content.map(value => {
                        return(
                            <>
                                <tr key={value.contentId}>
                                    <td>{value.contentId}</td>
                                    <td>{value.appId}</td>
                                    <td>{value.userName}</td>
                                    <td>{value.eventName}</td>
                                    <td>{value.streamerName}</td>
                                    <td>{value.postDate}</td>
                                    <td><Delete className="pointing" onClick={() => handleDeleteContent(value.contentId)} /></td>
                                </tr>
                                
                            </>
                        )
                    })}
                </tbody>
            </table>
  )
}

export default ContentList