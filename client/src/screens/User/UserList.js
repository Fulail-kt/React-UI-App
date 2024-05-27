


import React, { useState, useEffect } from 'react';
import { getUsers, updateUser } from '../../APIs/api'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  // Fetch users from API when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Function to handle user selection and open modal
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
    setEditedUser({ ...user });
  };

  // Function to handle editing user
  const handleEditUser = async () => {
    try {
      const response = await updateUser(selectedUser._id, editedUser);
      if (response.data.success) {
        // Update user list with edited user
        const updatedUsers = users.map((user) =>
          user._id === selectedUser._id ? editedUser : user
        );
        setUsers(updatedUsers);
        // Close modal
        setShowEditModal(false);
        setSelectedUser(null);
        setEditedUser({});
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>User Table</h2>
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.roles}</td>
              <td>
                <button onClick={() => handleUserSelect(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowEditModal(false)}>
              &times;
            </span>
            <h2>Edit User</h2>
            <label>First Name:</label>
            <input
              type="text"
              value={editedUser.firstName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, firstName: e.target.value })
              }
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={editedUser.lastName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, lastName: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="text"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
            <button onClick={handleEditUser}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
