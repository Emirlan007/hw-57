import React from 'react';
import {User} from '../../types';


const UserItem: React.FC<User> = ({ name, email, role, isActive }) => (
    <div className="text-start ps-5">
        <p>
            <strong>Name:</strong> {name}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
        <p>
            <strong>Role:</strong> {role}
        </p>
        <p>
            <strong>Status:</strong> {isActive ? "Active" : "Inactive"}
        </p>
        <hr/>
    </div>
);

export default UserItem;