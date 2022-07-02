import React, {useEffect} from 'react'
import { users } from '../../../Data/fakeData'
import {ReactComponent as Delete} from '../../../Assets/Admin/delete.svg'
import {ReactComponent as Upgrade} from '../../../Assets/Admin/to_partner.svg'
import {ReactComponent as Downgrade} from '../../../Assets/Admin/to_classic.svg'

function UserList() {

    useEffect(() => {
      document.title = "Reliveo | Gestion utilisateur"
    }, []);

    const handleDeleteUser = (prop) => {
        console.log("utilisateur n°" + prop + " supprimé")
    }

    const handleChangeStatus = (prop) => {
        prop === "partenaire" ? console.log("utilisateur passé classique") : console.log("utilisateur passé partenaire")
    }

    return (
            <table className='Admin__Manager_List'>
                <thead className='Admin__Manager_List_head'>
                    <tr>
                        <th>userId</th>
                        <th>Nom d’utilisateur</th>
                        <th>Statut</th>
                        <th>Posts</th>
                        <th>Evenements</th>
                    </tr>
                </thead>
                <tbody className='Admin__Manager_List_body'>
                    {users.map(value => {
                        return(
                            <>
                                <tr key={value.userId}>
                                    <td>{value.userId}</td>
                                    <td>{value.userName}</td>
                                    <td>{value.status}</td>
                                    <td>{value.postCount}</td>
                                    <td>{value.eventCount}</td>
                                    <td>{value.status === "partenaire" ? <Downgrade className="pointing" onClick={() => handleChangeStatus(value.status)}/> : <Upgrade className="pointing" onClick={() => handleChangeStatus(value.status)} />}</td>
                                    <td><Delete className="pointing" onClick={() => handleDeleteUser(value.userId)} /></td>
                                </tr>
                                
                            </>
                        )
                    })}
                </tbody>
            </table>
    
  )
}

export default UserList