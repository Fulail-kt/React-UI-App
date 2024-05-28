import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRole } from '../APIs/api';

const PermissionCheck = ({ children, allowedRole }) => {
  const [roles, setRoles] = React.useState([]);
  const [permissions, setPermissions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode(token);
          const userRoles = Array.isArray(decoded.role) ? decoded.role : [decoded.role];

          // Fetch roles and permissions
          const roleResponse = await getRole(userRoles);
          if (roleResponse.data && roleResponse.data.success) {
            const { roles, permissions } = roleResponse.data;
            setRoles(roles);
            setPermissions(permissions);

            if (!permissions.includes(allowedRole)) {
              window.location.href = `${process.env.PUBLIC_URL}/sign-in`;
            }
          } else {
            throw new Error('Failed to fetch roles and permissions');
          }
        } else {
          window.location.href = `${process.env.PUBLIC_URL}/sign-in`;
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        window.location.href = `${process.env.PUBLIC_URL}/sign-in`;
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [allowedRole, location.pathname]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (permissions.includes(allowedRole)) {
    return <>{children}</>;
  }

  return null;
};

export default PermissionCheck;
