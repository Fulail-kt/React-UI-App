import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import '../../App.css';
import { getRoles, updateRoleAndPermission, createRole,deleteRole } from '../../APIs/api';
import RoleForm from '../../components/RoleForm/RoleForm';

const RolesList = () => {
  const [roles, setRoles] = useState([]);
  const [editRole, setEditRole] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const permissions = [
    'Projects', 'Tasks', 'Timesheet', 'Leaders', 'Our Clients', 'Clients', 'Client Profile', 'Employees', 'Members', 'Holidays', 'Attendance','Users','Roles'
  ];

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        if (response?.data?.success) {
          setRoles(response?.data.roles);
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleEditClick = (roleId) => {
    const editUser = roles.find((role) => role?._id === roleId);
    setEditRole(editUser);
    setIsCreating(false);
  };

  const handleCreateClick = () => {
    setEditRole(null);
    setIsCreating(true);
  };

  const handleCancelEdit = () => {
    setEditRole(null);
    setIsCreating(false);
  };

  const handleDeleteClick = async (roleId) => {
    try {
      const response = await deleteRole(roleId);
      if (response?.data?.success) {
        setRoles(roles.filter(role => role._id !== roleId));
      }
    } catch (error) {
      console.error('Error deleting role:', error);
    }
  };

  const handleSave = async (role) => {
    try {
      if (isCreating) {
        console.log(role,"role")
        const response = await createRole(role);
        if (response?.data?.success) {
          setRoles([...roles, response.data.newRole]);
          setIsCreating(false);
        }
      } else {
        const response = await updateRoleAndPermission(editRole._id, role);
        if (response?.data?.success) {
          setRoles(roles.map(r => (r._id === editRole._id ? role : r)));
          setEditRole(null);
        }
      }
    } catch (error) {
      console.error('Error saving role:', error);
    }
  };


  return (
    <div>
    <div className='d-flex justify-content-between align-items-center w-100'>
      <PageHeader headerTitle="Manage Roles" />  <div> <button className="btn btn-success px-2" onClick={handleCreateClick}>Create New Role</button></div>
      </div>
      <div>
     
        <div className="table-responsive">
          <table className="table bg-no w-100">
            <thead className="border-bottom">
              <tr>
                <th className="py-3">Role Name</th>
                <th className="py-3">Permissions</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {roles?.map(role => (
                <tr key={role?._id} className="py-3">
                  <td>{role?.roleName}</td>
                  <td>{role?.permissions.join(', ')}</td>
                  <td className='d-flex gap-1'>
                    <button className="btn btn-warning text-white" onClick={() => handleEditClick(role._id)}>Edit</button>
                    <button className="btn btn-warning text-white" onClick={() => handleDeleteClick(role._id)}><i class="icofont-ui-delete"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(editRole || isCreating) && (
        <>
          <h1 className='text-center fw-bold fs-4 mt-2'>{isCreating ? 'Create Role' : 'Edit Role'}</h1>
          <RoleForm
            role={editRole}
            permissions={permissions}
            onCancel={handleCancelEdit}
            onSave={handleSave}
          />
        </>
      )}
    </div>
  );
};

export default RolesList;
