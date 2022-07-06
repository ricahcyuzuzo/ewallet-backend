import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  balance: Number,
  userId: String,
  createdAt: Date,
});

const accountsModel = mongoose.model('accounts', accountSchema);

export default accountsModel;
