import Api from "../axios/axios";

// Sign-in function
export const signin = async (email, password) => {
    try {
        // Validate email format
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            throw new Error('Invalid email format');
        }

        // Validate password length
        if (password.trim().length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        const response = await Api.post('/login', { email, password });
        return response;
    } catch (error) {
        console.error('Sign-in error:', error?.response?.data || error.message);
        alert('Sign-in error: ' + (error.response?.data?.message || error.message));
      
    }
};

// Sign-up function
export const signup = async (first, last, email, password, confirm, term) => {
    try {
        // Validate email format
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            throw new Error('Invalid email format');
        }

        // Validate password length
        if (password.trim().length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        if (password !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        if (!term) {
            alert("Please accept the terms and conditions.");
            return;
        }

        const response = await Api.post('/create-user', { email, password, firstName: first, lastName: last, term });
        return response;
    } catch (error) {
        console.error('Sign-up error:', error.response?.data || error.message);
        alert('Sign-up error: ' + (error.response?.data?.message || error.message));
       
    }
};

// Roles CRUD

export const getRoles = async () => {
    try {
        const response = await Api.get('/roles');
        return response;
    } catch (error) {
        console.error('Error fetching roles:', error.response?.data || error.message);
        alert('Error fetching roles: ' + (error.response?.data?.message || error.message));
   
    }
};

export const getRole = async (role) => {
    try {
        const response = await Api.get(`/role/${role}`);
        return response;
    } catch (error) {
        console.error('Error fetching role:', error.response?.data || error.message);
        alert('Error fetching role: ' + (error.response?.data?.message || error.message));
    
    }
};

export const updateRoleAndPermission = async (id, role) => {
    try {
        const response = await Api.put(`/roles/${id}`, { roleName: role.roleName, permissions: role.permissions });
        return response;
    } catch (error) {
        console.error('Error updating role:', error.response?.data || error.message);
        alert('Error updating role: ' + (error.response?.data?.message || error.message));
      
    }
};

export const createRole = async (role) => {
    try {
        const response = await Api.post('/create-role', { roleName: role.roleName, permissions: role.permissions });
        return response;
    } catch (error) {
        console.error('Role creation error:', error.response?.data || error.message);
        alert('Role creation error: ' + (error.response?.data?.message || error.message));
     
    }
};

export const deleteRole = async (id) => {
    try {
        const response = await Api.delete(`/roles/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting role:', error.response?.data || error.message);
        alert('Error deleting role: ' + (error.response?.data?.message || error.message));
     
    }
};

// User CRUD

export const getUsers = async () => {
    try {
        const response = await Api.get('/users');
        return response;
    } catch (error) {
        console.error('Error fetching users:', error.response?.data || error.message);
        alert('Error fetching users: ' + (error.response?.data?.message || error.message));
  
    }
};

export const updateUser = async (id, details) => {
    try {
        if (details?.roles?.length < 1) {
            alert('Roles must contain at least one role');
            return { message: 'Roles must contain at least one role' };
        }
        const response = await Api.put(`/users/${id}`, { firstName: details.firstName, lastName: details?.lastName, email: details?.email, roles: details?.roles });
        return response;
    } catch (error) {
        console.error('Error updating user:', error.response?.data || error.message);
        alert('Error updating user: ' + (error.response?.data?.message || error.message));
      
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await Api.delete(`/users/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting user:', error.response?.data || error.message);
        alert('Error deleting user: ' + (error.response?.data?.message || error.message));
      
    }
};
