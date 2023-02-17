import React, { useState, useEffect } from 'react';
import { usersInstance } from '../../api/instance';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as LoadingIcon } from '../../assets/loading.svg';
import 'dtu'
import './UserList.css'

const UserList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [usersKeys, setUsersKeys] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        usersInstance.get('/users') 
            .then(responce => {
                const { address, ...restKeys} = responce.data[0]
                setUsers(responce.data)
                setUsersKeys(Object.keys(restKeys))
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
        }, []);
    
    console.log(users);
    console.log(usersKeys);

    return (
        <div className='users-list'>
           { 
                isLoading ? 
                <LoadingIcon/>
                :
           <table>
                <thead>
                    <tr>
                        {
                            usersKeys.map((userColumns, ind) => 
                                <th colSpan={ind === 6 ? 3 : 1} key={uuidv4()}>{userColumns.up(0)}</th>    
                            ) 
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => 
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                                <td>{user.company.bs}</td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
            }
        </div>
    );
}

export default UserList;
