import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String],
    required: true,
  },
});

const Role = mongoose.model('Role', RoleSchema);
export default Role;
