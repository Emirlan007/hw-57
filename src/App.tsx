import './App.css';
import {useState} from "react";
import {User, UserMutation} from './types';

const App = () => {

    const [form, setForm] = useState<UserMutation>({
        name: '',
        email: '',
        isActive: false,
        role: 'user',
    });

    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        setUsers((prevUsers) => [newUser, ...prevUsers]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm(prevState => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser = { id: String(new Date().toISOString()), ...form };
        addUser(newUser);

        setForm({ name: '', email: '', isActive: false, role: 'user' });
    };

    return(
        <>
            <div className="d-flex justify-content-between align-items-start container text-center" style={{height: "100vh"}}>
                <div className="border border-secondary w-50 me-2 vh-75 d-flex flex-column justify-content-start">
                    <h1 className="m-3">Login</h1>
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
                                onChange={handleChange}
                                required={true}
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
                                onChange={handleChange}
                                required={true}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label className="text-start" htmlFor="role">Role</label>
                            <select
                                id="role"
                                name="role"
                                className="form-control w-75 ms-auto me-auto"
                                value={form.role}
                                onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-25 ms-auto me-auto mb-5">Создать</button>
                    </form>
                </div>

                <div className="border border-secondary w-50 ms-2 vh-100 overflow-auto">
                    <h2 className="m-3">Users</h2>
                    <hr/>
                    {users.length === 0 ? <p>No users</p> :
                        <>
                        {users.map((user) => (
                            <div key={user.id}>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Role:</strong> {user.role}</p>
                                <p><strong>Status:</strong> {user.isActive ? 'Active' : 'Inactive'}</p>
                                <hr/>
                            </div>
                        ))}
                        </>
                    }
                </div>

            </div>

        </>
    );
};
export default App;
