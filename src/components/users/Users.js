import React from 'react'
import UserItem from './UserItem';

const Users = props => {
        return (
            <div>
                <center>
                {props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
                </center>
            </div>
        )
    }
export default Users;
