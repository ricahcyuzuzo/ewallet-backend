import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  code: String,
  userId: String,
});

const productModel = mongoose.model('products', productSchema);

export default productModel;
