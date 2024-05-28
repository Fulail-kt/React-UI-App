import User from "../models/userModel.js"; 
import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {

  try {

    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Fetch user from the database
    const user = await User.findById(decoded.id).populate({path:'roles',model:'Role'});
    if (!user) {
      throw new Error('User not found');
    }

    const isAdmin = user.roles.some(role => role.roleName === 'Admin');

    if (!isAdmin) {
      return res.status(403).send({ error: 'Access denied', success: false });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(401).send({ error: 'Please authenticate.', success: false });
  }
};

export default isAdmin;
