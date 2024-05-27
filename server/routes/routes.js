import express from 'express';
const router = express.Router();
import { createUser, getUsers, updateUser, deleteUser, login } from '../controllers/userController.js';
import { createRole, getRoles, updateRole, deleteRole } from '../controllers/roleController.js';
import auth from '../middleware/auth.js';



router.post('/create-role', createRole);
router.get('/roles', getRoles);
router.put('/roles/:id',auth, updateRole);
router.delete('/roles/:id',auth, deleteRole);



router.post('/create-user', createUser);
router.get('/users', getUsers);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id', auth, deleteUser);
router.post('/login', login);



export default router;
