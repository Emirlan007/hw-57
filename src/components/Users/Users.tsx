import React from 'react';
import {User} from '../../types';
import UserItem from '../UserItem/UserItem';

interface UsersProps {
    users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => (
    <div className="border border-secondary w-50 ms-2 vh-100 d-flex flex-column">
        <h2 className="my-3 fs-1">Users</h2>
        <hr/>
        <div className="overflow-auto" style={{flexGrow: 1, maxHeight: "calc(100% - 60px)"}}>
            {users.length === 0 ? (
                <p className="fs-4 text-danger" >No users</p>
            ) : (
                users.map((user) => <UserItem key={user.id} {...user} />)
            )}
        </div>
    </div>
);

export default Users;