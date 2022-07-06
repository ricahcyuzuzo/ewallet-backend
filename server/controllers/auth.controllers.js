import Mongoose from 'mongoose';
import { comparePassword, generateToken, hashPassword } from '../helpers/authenticate';
import { validateUserSignup, validateUserSignin } from '../helpers/validations/userValidations';
import { createUser, loginUser } from '../models/users.body';
import User from '../models/users.model';

class Authentication {
  static signup (req, res) {
    const { names, phone, password,type } = req.body;
    const { error } = validateUserSignup(createUser(req));
    if(error){
      return res.status(400).json({
        status: 400,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    User.find({ phone }, (error, result) => {
      if(result.length){
        return res.status(409).json({
          message: 'Email is already used, please try another',
          status: 409
        });
      }

      const hashedPassword = hashPassword(password);

      const user = new User({
        _id: new Mongoose.Types.ObjectId(),
        names,
        phone,
        password: hashedPassword,
        type
      })

      user
        .save()
        .then(() => {
          res.status(201).json({
            message: 'Wohooo, You have created an account',
            status: 201,
          });
        })
        .catch(err => {
          res.status(500).json({
            message: 'Oh no, there is something wrong, check your internet or call the support.',
            status: 500
          })
        })

    })

  }

  static signin (req, res) {
    const { phone, password } = req.body;
    const { error } = validateUserSignin(loginUser(req));
    if(error){
      return res.status(400).json({
        status: 400,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    User.findOne({ phone })
    .exec()
    .then((doc) => {
      const compare = comparePassword(password, doc.password);
      if(compare) {
        if(doc){
          res.status(201).json({
            status: 201,
            message: 'Logged in successful',
            token: generateToken(doc),
          });
        }else{
          res.status(401).json({
            status: 401,
            message: 'Wrong Phone number or password'
          });
        }
      }else{
        res.status(401).json({
          status: 401,
          message: 'Wrong Phone number or password',
        });
      }
    }).catch(() => {
      res.status(401).json({
        status: 401,
        message: 'Wrong Phone number or password',
      })
    })



  }

  // static forgotPassword (req, res) {
  //   const { phone, password } = req.body;
  //   User.findOne({ phone })
  //   .exec()
  //   .then((doc) => {
  //     if(doc) {
        
  //     }
  //   })
  // }
}

export default Authentication;
