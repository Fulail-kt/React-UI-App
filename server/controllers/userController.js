import User from '../models/userModel.js';
import roleModel from '../models/roleModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  
  let roles;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if(!roles){
        const defaultRole = await roleModel.findOne({roleName:'Employee'})
        roles=[defaultRole._id]
    }
    const newUser = new User({ firstName, lastName, email,roles,password: hashedPassword });
    await newUser.save();
    res.status(201).json({sucess:true,newUser,message:'User created successfully'});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('roles');
    res.status(200).json({sucess:true,users});
  } catch (err) {
    res.status(500).json({sucess:false, error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, mobile, roles } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, mobile, roles }, { new: true });
    res.status(200).json({sucess:true,updatedUser,message:'User updated successfully'});
  } catch (err) {
    res.status(500).json({sucess:false, error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({sucess:true, message: 'User deleted successfully'  });
  } catch (err) {
    res.status(500).json({sucess:false, error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({sucess:false, error: 'Invalid credentials' });

    }
    const userDataWithRole=await User.findById(user.id).populate({path:'roles',model:'Role'})

    const roles = userDataWithRole?.roles.filter(item => item.roleName).map(item => item.roleName); 

    const token = jwt.sign({ id: user._id ,role:roles}, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.status(200).json({ token, sucess:true });

  } catch (err) {
    res.status(500).json({sucess:false, error: err.message });
  }
};
