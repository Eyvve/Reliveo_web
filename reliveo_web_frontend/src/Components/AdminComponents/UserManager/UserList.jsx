import React, { useEffect, useState } from 'react'
import { users } from '../../../Data/fakeData'
import { ReactComponent as Delete } from '../../../Assets/Admin/delete.svg'
import { ReactComponent as Upgrade } from '../../../Assets/Admin/to_partner.svg'
import { ReactComponent as Downgrade } from '../../../Assets/Admin/to_classic.svg'
import useGetUsers from '../../../Hooks/Get/useGetUsers'
import useDeleteUser from '../../../Hooks/Delete/useDeleteUser'
import usePutStreamer from '../../../Hooks/Put/usePutStreamer'
function UserList() {

    const getUsers = useGetUsers();
    const deleteUser = useDeleteUser();
    const putStreamer = usePutStreamer();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        document.title = "Reliveo | Gestion utilisateur"
    }, []);

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
    }, [users]);

    const handleDeleteUser = (username, id) => {
        console.log("utilisateur n°" + username + " supprimé");
        deleteUser(id)
    }

    // const handleChangeStatus = (prop) => {
    //     prop === "partenaire" ? console.log("utilisateur passé classique") : console.log("utilisateur passé partenaire")
    //     putStreamer()
    // }

    return (
        <div className='Admin__Manager_List'>
            <div className='Admin__Manager_List_head UserList'>
                    <div>ID</div>
                    <div>Nom d’utilisateur</div>
                    <div>Role</div>
                    <div>email</div>
                    <div>Posts</div>
                    {/* <div>Evenements</div> */}
            </div>
            <div className='Admin__Manager_List_body'>
                {users?.map(value => {
                    return (
                        <>
                            <div key={value.id} className='Admin__Manager_List_body_row UserList'>
                                <div>{value.id}</div>
                                <div>{value.username}</div>
                                <div>{value.email}</div>
                                <div>{value.roles[0]}</div>
                                {/* <div>partenaire</div> */}
                                <div>{value.posts.length}</div>
                                {/* <div>{value.eventCount}</div> */}
                                {/* <div>{value.status === "partenaire" ? <Downgrade className="pointing" onClick={() => handleChangeStatus(value.status)} /> : <Upgrade className="pointing" onClick={() => handleChangeStatus(value.status)} />}</div> */}
                                <div><Delete className="pointing" onClick={() => handleDeleteUser(value.userId, value.id)} /></div>
                            </div>

                        </>
                    )
                })}
            </div>
        </div>

    )
}

export default UserList