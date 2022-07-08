import React, {useEffect} from 'react'
import { content } from '../../../Data/fakeData'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'

function ContentList() {
    
    const handleDeleteContent = (prop) => {
        console.log("contenu n°" + prop + " supprimé")
    }

  return (
    <div className='Admin__Manager_List'>
                <div className='Admin__Manager_List_head ContentList'>
                        <th>Id</th>
                        <th>AppId</th>
                        <th>Utilisateur</th>
                        <th>Evènement</th>
                        <th>Diffuseur</th>
                        <th>Date</th>
                </div>
                <div className='Admin__Manager_List_body'>
                    {content.map(value => {
                        return(
                            <>
                                <div  key={value.contentId} className='Admin__Manager_List_body_row ContentList'>
                                    <div>{value.contentId}</div>
                                    <div>{value.appId}</div>
                                    <div>{value.userName}</div>
                                    <div>{value.eventName}</div>
                                    <div>{value.streamerName}</div>
                                    <div>{value.postDate}</div>
                                    <div><Delete className="pointing" onClick={() => handleDeleteContent(value.contentId)} /></div>
                                </div>
                                
                            </>
                        )
                    })}
                </div>
            </div>
  )
}

export default ContentList