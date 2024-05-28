import React, { useState, useEffect } from 'react';
import { getRoles, getUsers, updateUser, deleteUser } from '../../APIs/api';
import PageHeader from '../../components/common/PageHeader';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    const [allRoles, setAllRoles] = useState([]);

    useEffect(() => {
        const fetchUsersAndRoles = async () => {
            try {
                const [usersResponse, rolesResponse] = await Promise.all([getUsers(), getRoles()]);
                setUsers(usersResponse?.data?.users);
                setAllRoles(rolesResponse?.data?.roles);
            } catch (error) {
                console.error('Error fetching users and roles:', error);
            }
        };
        fetchUsersAndRoles();
    }, []);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        setEditedUser({ ...user, roles: user?.roles?.map(role => role._id) });
        setShowEditModal(true);
    };

    const handleDeleteUser = async (selected) => {

        try {
            const response = await deleteUser(selected);
            if (response?.data?.success) {
                const updatedUsers = users.filter(user => user._id !== selected);
                setUsers(updatedUsers);
                setSelectedUser(null);

            } else {
                console.error('Error deleting user:', response?.data?.error);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }

    }
    const handleEditUser = async (e) => {
        e.preventDefault();
        try {
            const response = await updateUser(selectedUser?._id, editedUser);
            if (response?.data?.success) {
                const updatedUser = response?.data?.updatedUser;
                const updatedUsers = users.map((user) =>
                    user?._id === selectedUser?._id ? updatedUser : user
                );
                setUsers(updatedUsers);
                setShowEditModal(false);
                setSelectedUser(null);
                setEditedUser({});
            } else {
                alert(response.message)
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };


    const handleRoleChange = (roleId) => {
        const updatedRoles = editedUser?.roles?.includes(roleId)
            ? editedUser?.roles?.filter(role => role !== roleId)
            : [...editedUser?.roles, roleId];
        setEditedUser({ ...editedUser, roles: updatedRoles });
    };

    return (
        <div>
            <PageHeader headerTitle="Manage Users" />
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                <div className="table-responsive">
                    <table className='table bg-no w-100'>
                        <thead className='border-bottom'>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Roles</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user) => (
                                <tr key={user?._id}>
                                    <td>{user?.firstName}</td>
                                    <td>{user?.lastName}</td>
                                    <td>{user?.email}</td>
                                    <td className='w-50'>
                                        <ul>
                                            {user?.roles?.map((role) => (
                                                <li key={role?._id}>
                                                    <strong>{role?.roleName}:</strong> {role?.permissions?.join(', ')}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <button className="btn btn-warning text-white" disabled={user?.roles.some(role => role.roleName === "Admin")} onClick={() => handleUserSelect(user)}>Edit</button>
                                            <button className="btn btn-warning text-white" disabled={user?.roles.some(role => role.roleName === "Admin")} onClick={() => handleDeleteUser(user._id)}><i className="icofont-ui-delete"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                {showEditModal && selectedUser && (
                    <div className="modal-overlay position-absolute w-50 rounded-3 shadow-lg">
                        <div className="modal-content bg-white d-flex flex-column align-items-center justify-content-center rounded-3 py-3 px-2">
                            <form className='w-100' onSubmit={handleEditUser}>
                                <div className='w-100 d-flex'>
                                    <span className="close" onClick={() => setShowEditModal(false)}>
                                        &times;
                                    </span>
                                    <h2 className='text-center w-100 fs-4 fw-semibold'>Edit User</h2>
                                </div>
                                <div className="w-75 mx-auto rounded-lg overflow-hidden">
                                    <div className="d-flex">
                                        <div className="w-25 text-black py-3 px-2">
                                            <div className="d-flex flex-column gap-3">
                                                <p className="mb-2">FIRST NAME</p>
                                                <p className="mb-2">LAST NAME</p>
                                                <p className="mb-2">EMAIL</p>
                                                <p>ROLES</p>
                                            </div>
                                        </div>
                                        <div className="w-75 px-3 py-2">
                                            <div className="d-flex flex-column gap-2">
                                                <input type="text" className="form-control" placeholder="Enter first name" value={editedUser?.firstName} onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })} />
                                                <input type="text" className="form-control" value={editedUser?.lastName} onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })} placeholder="Enter last name" />
                                                <input type="email" className="form-control" value={editedUser?.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} placeholder="Enter email" />
                                                <div className="d-flex flex-column">
                                                    {allRoles?.map((role) => (
                                                        <label key={role?._id} className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                checked={editedUser?.roles?.includes(role._id)}
                                                                onChange={() => handleRoleChange(role._id)}
                                                            />
                                                            {role?.roleName}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Save</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserList;
