import Api from "../axios/axios";


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
      console.error('Sign-in error:', error.response?.data || error.message); 
      throw error; 
    }
  };



  export const signup = async (first,last, email, password,confim,term) => {
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

      console.log(password,confim,"chcke")
      if (password !== confim) {
          alert("Passwords do not match.");
          return;
        }
        if (!term) {
          alert("Please accept the terms and conditions.");
          return;
      }
  
      const response = await Api.post('/create-user', { email, password,firstName:first,lastName:last,term });
      return response;
    } catch (error) {
      console.error('Sign-in error:', error.response?.data || error.message); 
      throw error; 
    }
  };
 


  // Roles CRUD


export const getRoles=async()=>{
    try {
        const response=await Api.get('/roles')
        return response
    } catch (error) {
        throw error; 
    }
}
export const getRole=async(role)=>{
    try {
        const response=await Api.get(`/role/${role}`)
        return response
    } catch (error) {
        throw error; 
    }
}

export const updateRoleAndPermission=async(id,role)=>{
    try {
        const response=await Api.put(`/roles/${id}`,{roleName:role.roleName,permissions:role.permissions})
        return response
    } catch (error) {
        throw error; 
    }
}

export const createRole=async (role)=>{
    console.log(role)
    try {
        const response= await Api.post('/create-role',{roleName:role.roleName,permissions:role.permissions})
        return response
    } catch (error) {
        console.error('Role creation error:', error.response?.data || error.message); 
        throw error; 
    }
}

export const deleteRole=async (id)=>{
    try {
        const response= await Api.delete(`/roles/${id}`)
        return response
    } catch (error) {
        console.error('Role creation error:', error.response?.data || error.message); 
        throw error; 
    }
}


// USER CRUD

// import { getUsers, updateUser } from '../../APIs'; 
export const getUsers=async()=>{
    try {
        const response=await Api.get('/users')
        return response
    } catch (error) {
        
    }
}

export const updateUser=async(id,details)=>{
    try {
        if(details?.roles?.length<1){
            return {message:'Roles must contain atleast one role'}
        }
        const response=await Api.put(`/users/${id}`,{ firstName:details.firstName, lastName:details?.lastName, email:details?.email, roles:details?.roles })
        return response
    } catch (error) {
        
    }
}
export const deleteUser=async(id)=>{
    try {
        const response=await Api.delete(`/users/${id}`)
        return response
    } catch (error) {
        
    }
}