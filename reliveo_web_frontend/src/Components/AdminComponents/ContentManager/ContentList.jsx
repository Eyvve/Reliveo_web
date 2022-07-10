import React, {useEffect, useState} from 'react'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'
import useGetContentList from '../../../Hooks/Get/useGetContentList'
import useDeleteContent from '../../../Hooks/Delete/useDeleteContent'
// import useGetById from '../../../Hooks/Get/useGetById'
import useGetUsers from '../../../Hooks/Get/useGetUsers'
import Moment from "moment"


function ContentList() {

    useEffect(() => {
        document.title = "Reliveo | Gestion contenu"
    }, []);

    const getContent = useGetContentList()
    const getUsers = useGetUsers()
    const deleteContent = useDeleteContent()
    const [content, setContent] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(user.length == 0){
            getUsers().then(data => setUser(data))
        }
        console.log(user)
    }, [user]);

    useEffect(() => {
        getContent()
            .then(data => setContent(data))
    }, [content]);
    


    const handleDeleteContent = (prop) => {
        console.log("contenu n°" + prop + " supprimé")
        deleteContent(prop)
    }

  return (
    <div className='Admin__Manager_List'>
                <div className='Admin__Manager_List_head ContentList'>
                        <div>Id</div>
                        <div>Auteur</div>
                        <div>Evènement</div>
                        <div>Date</div>
                </div>
                <div className='Admin__Manager_List_body'>
                    {content.map(value => {
                        return(
                            <>
                                <div  key={value.id} className='Admin__Manager_List_body_row ContentList'>
                                    <div>{value.id}</div>
                                    {/* <div>{user?.filter(key => "/api/users/" + key.id == value?.author)[0]['username']}</div> */}
                                    <div>{value.author}</div>
                                    <div>{value.event}</div>
                                    <div>{Moment(value.timestampEnd).format('DD MMMM yyyy')}</div>
                                    <div><Delete className="pointing" onClick={() => handleDeleteContent(value.id)} /></div>
                                </div>
                                
                            </>
                        )
                    })}
                </div>
            </div>
  )
}

export default ContentList