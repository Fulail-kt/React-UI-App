import roleModel from '../models/roleModel.js';

export const createRole = async (req, res) => {
  const { roleName, permissions } = req.body;
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

export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { roleName, permissions } = req.body;
  console.log(req.body,req.params)
  try {
    const updatedRole = await roleModel.findByIdAndUpdate(id, { roleName, permissions }, { new: true });
    res.status(200).json({updatedRole,message:'Role updated successfully',success:true});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await roleModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Role deleted successfully' ,success:true });
  } catch (err) {
    res.status(500).json({ error: err.message,success:false });
  }
};
