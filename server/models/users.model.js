import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  names: String,
  phone: String,
  password: String,
  type: String,
})

const userModel = mongoose.model('users', usersSchema);

export default userModel;
