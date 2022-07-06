import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  amount: String,
  createdAt: String,
  fromId: String,
  toId: String,
  status: String,
  action: String,
});

const transactionModel = mongoose.model('transactions', transactionSchema);

export default transactionModel;
