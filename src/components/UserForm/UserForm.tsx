import React from 'react';
import {UserMutation} from '../../types';

interface UserFormProps {
    form: UserMutation;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserForm: React.FC<UserFormProps> = ({ form, onChange, onSubmit }) => (
    <div className="border border-secondary w-50 me-2 vh-50 d-flex flex-column justify-content-start">
        <h1 className="my-3">Create User</h1>
        <hr/>
        <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control w-75 ms-auto me-auto"
                    value={form.name}
                    onChange={onChange}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control w-75 ms-auto me-auto"
                    value={form.email}
                    onChange={onChange}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    name="role"
                    className="form-control w-75 ms-auto me-auto"
                    value={form.role}
                    onChange={onChange}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group mb-3">
                <div className="form-check w-75 ms-auto me-auto text-start">
                    <label htmlFor="isActive" className="form-check-label">Active</label>
                    <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        className="form-check-input"
                        checked={form.isActive}
                        onChange={onChange}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-25 ms-auto me-auto mb-5">Create</button>
        </form>
    </div>
);

export default UserForm;
