import express from 'express';
const router = express.Router();
import { createUser, getUsers, updateUser, deleteUser, login } from '../controllers/userController.js';
import { createRole, getRoles, getRole, updateRole, deleteRole } from '../controllers/roleController.js';
import auth from '../middleware/auth.js';
import isAdmin from '../middleware/isAdmin.js';



router.post('/create-role',isAdmin, createRole);
router.get('/roles', getRoles);
router.get('/role/:role', getRole);
router.put('/roles/:id',isAdmin, updateRole);
router.delete('/roles/:id',auth, deleteRole);



router.post('/create-user', createUser);
router.get('/users', getUsers);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id',isAdmin, deleteUser);
router.post('/login', login);



export default router;
