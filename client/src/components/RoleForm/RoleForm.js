import React, { useState, useEffect } from 'react';

const RoleForm = ({ role, permissions, onCancel, onSave }) => {
  const [roleName, setRoleName] = useState('');
  const [rolePermissions, setRolePermissions] = useState([]);

  useEffect(() => {
    if (role) {
      setRoleName(role.roleName);
      setRolePermissions(role.permissions);
    } else {
      setRoleName('');
      setRolePermissions([]);
    }
  }, [role]);

  const handlePermissionChange = (permission) => {
    if (rolePermissions.includes(permission)) {
      setRolePermissions(rolePermissions.filter((perm) => perm !== permission));
    } else {
      setRolePermissions([...rolePermissions, permission]);
    }
  };

  const handleSave = () => {
    const updatedRole = { roleName, permissions: rolePermissions };
    onSave(updatedRole);
  };

  return (
    <div className='d-flex align-items-center h-100 justify-content-center h-100'>
      <form className='w-75 border px-3 border-4 rounded-3 border-secondary h-full d-grid grid-0 space-5'>
        <div className='d-flex w-100 py-1 justify-content-center'>
          <label className='px-2 fw-semibold text-end w-25'>Role Name :</label>
          <input
            type="text"
            name="name"
            className='bg-transparent w-25 no-border border-0 text-danger'
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='text-center pb-3 w-100'>Permissions</label>
          <div className="row">
            {permissions.map(permission => (
              <div key={permission} className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="permissions"
                    value={permission}
                    checked={rolePermissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <label className="form-check-label">{permission}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center py-4 gap-3">
          <button type="button" className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
          <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default RoleForm;
