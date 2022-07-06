import { validateCreateProduct } from "../helpers/validations/productValidations";
import { createProduct } from "../models/products.body";
import Product from "../models/products.model";
import { v4 as uuidv4 } from "uuid";
import Mongoose from 'mongoose';
import jwtDecode from "jwt-decode";


class ProductController {

  static addProduct (req, res) {
    const { name, price } = req.body;
    const { error } = validateCreateProduct(createProduct(req));
    if(error){
      return res.status(400).json({
        status: 400,
        message: error.details[0].message.replace(/"/g, '')
      });
    }
    const id = uuidv4();
    const data = jwtDecode(req.headers.authorization);

    const product = new Product({
      _id: new Mongoose.Types.ObjectId(),
      name: name,
      price: price,
      code: id,
      userId: data.user._id
    })

    product
      .save()
      .then((doc) => {
        res.status(201).json({
          status: 201,
          message: 'Product created successful',
          product: doc
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Something is wrong, try again later',
          status: 500,
          error: error
        })
      })
  }

  static getAllProductsBuUser (req, res) {
    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id;

    Product.find({ userId })
      .exec()
      .then((doc) => {
        res.status(200).json({
          status: 200,
          results: doc
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 500,
          error: err
        });
      });
  }
  
}

export default ProductController;
