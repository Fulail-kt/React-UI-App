import roleModel from '../models/roleModel.js';

export const createRole = async (req, res) => {
  const { roleName, permissions } = req.body;
  if(!roleName || !permissions){
    res.status(400).json({message:'field missing',sucess:false})
  }
  try {
    const newRole = new roleModel({ roleName, permissions });
    await newRole.save();
    res.status(201).json({newRole,message:'Role created successfully',success:true});
  } catch (err) {
    res.status(500).json({ error: err.message,success:false });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await roleModel.find();
    res.status(200).json({roles,success:true});
  } catch (err) {
    res.status(500).json({ error: err.message,success:false });
  }
};
export const getRole = async (req, res) => {
  try {
    const { role } = req.params;

    if(!role){
      res.status(400).json({message:'field missing',sucess:false})
    }

    let roles = [];

    const rolesArray = role.split(',').map(r => r.trim());

    roles = await roleModel.find({ roleName: { $in: rolesArray } });

    const permissions = roles.flatMap(role => role.permissions || []);

    const uniquePermissions = [...new Set(permissions)];


    res.status(200).json({ roles, permissions: uniquePermissions, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
};


export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { roleName, permissions } = req.body;

  if(!roleName || !permissions){
    res.status(400).json({message:'field missing',sucess:false})
  }
  try {
    const updatedRole = await roleModel.findByIdAndUpdate(id, { roleName, permissions }, { new: true });
    res.status(200).json({updatedRole,message:'Role updated successfully',success:true});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRole = async (req, res) => {
  const { id } = req.params;
  if(!id){
    res.status(400).json({message:'id missing',sucess:false})
  }
  try {
    await roleModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Role deleted successfully' ,success:true });
  } catch (err) {
    res.status(500).json({ error: err.message,success:false });
  }
};
