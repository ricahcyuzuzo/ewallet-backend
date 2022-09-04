import jwtDecode from 'jwt-decode';
import Mongoose from 'mongoose';
import Account from '../models/account.model';
import Product from '../models/products.model';
import Transaction from '../models/transaction.model';
import User from '../models/users.model';

class TransactionsController {
  static createAccount (req, res){
    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id;
    const newAccount = new Account({
      _id: new Mongoose.Types.ObjectId(),
      balance: 0,
      userId: userId,
      createdAt: new Date().toDateString()
    });

    newAccount 
      .save()
      .then((doc) => {
        res.status(201).json({
          status: 201,
          message: 'Account created successfull',
          accountDetails: doc,
        });
      }).catch(err => {
        res.status(500).json({
          status: 201,
          message: 'Something went wrong',
          error: err
        });
      })
  }

  static async recharge (req, res) {
    const { amount } = req.body;
    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id; 

    const account = await Account.findOne({ userId }).exec();
    const balance = parseInt(amount) + parseInt(account.balance);
    Account.findOneAndUpdate({ userId , balance })
      .exec()
      .then(() => {
        const transaction = new Transaction({
          _id: new Mongoose.Types.ObjectId(),
          amount: amount,
          createdAt: new Date().toDateString(),
          fromId: userId,
          toId: userId,
          status: 'Incoming',
          action: 'Recharging your account.'
        });

        transaction
          .save()
          .then(() => {
            res.status(201).json({
              message: 'You have received ' + amount + ' RWF, your new balance is ' + balance + ' RWF',
              status: 201,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: 'Something went wrong!',
              status: 500,
              error: err
            });
          })
      }).catch((err) => {
        res.status(500).json({
          message: 'Something went wrong!',
          status: 500,
          error: err
        });
      });
  };

  static async pay (req, res) {
    const { code } = req.body;

    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id;

    const product = await Product.findOne({ code }).exec();
    const account = await Account.findOne({ userId }).exec();
    const payeeId = product.userId;
    const payeeAccount = await Account.findOne({ userId: payeeId }).exec();
    
    if(parseInt(account.balance) < parseInt(product.price)){
      return res.status(400).json({
        status: 400,
        message: 'Oops, You have unsufficient funds on your account'
      })
    }

    const amountToPay = parseInt(payeeAccount.balance) + parseInt(product.price);
    const amountToDeduct = parseInt(account.balance) - parseInt(product.price);

     Account.findOneAndUpdate({ userId: payeeId }, { balance: amountToPay })
      .exec()
      .then(() => {
        Account.findOneAndUpdate({ userId }, { balance: amountToDeduct }).exec()
          .then(() => {
            const transaction = new Transaction({
              _id: new Mongoose.Types.ObjectId(),
              amount: product.price,
              createdAt: new Date().toDateString(),
              fromId: userId,
              toId: payeeId,
              status: 'Outgoing',
              action: `Paying ${product.name} at ${product.price}`
            });


            transaction
              .save()
              .then((res) => {
                console.log(res, 'Hihihih');
                res.status(201).json({
                  message: 'You have paid successful the ' + product.name + ' at ' + product.price + ' RWF, Your remaining balance is ' + amountToDeduct + ' RWF',
                  status: 201, 
                })
              }).catch((err) => {
                res.status(500).json({
                  message: 'Something went wrong',
                  status: 500,
                  error: err
                });
              })
          })
          .catch((err) => {
            res.status(500).json({
              message: 'Something went wrong',
              status: 500,
              error: err
            });
          });
      })
      .catch(() => {
        res.status(500).json({
          message: 'Something went wrong',
          status: 500,
          error: err
        });
      })
  }

  static async getTransactions (req, res) {
    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id;

    const account = await Account.findOne({ userId }).exec();
    const transactions = await Transaction.find({}).exec();
    res.status(200).json({
      transactions: transactions,
      status: 200,
      account
    })
  }

  static async sendMoney (req, res) {
    const data = jwtDecode(req.headers.authorization);
    const userId = data.user._id;
    const { receiver_id } = req.query;
    const { amountToSend } = req.body;

    const account = await Account.findOne({ userId }).exec();
    const receiverAccount = await Account.findOne({ userId: receiver_id }).exec();

    if(parseInt(account.balance) < parseInt(amountToSend)){
      return res.status(400).json({
        status: 400,
        message: 'Oops, You have unsufficient funds on your account'
      })
    }

    const amountReceived = parseInt(receiverAccount.balance) + parseInt(amountToSend);
    const amountToDeduce = parseInt(account.balance) - parseInt(amountToSend);

    Account.findOneAndUpdate({ userId: receiver_id }, { balance: amountReceived })
    .exec()
    .then(() => {
      Account.findOneAndUpdate({ userId }, { balance: amountToDeduce })
      .exec()
      .then(async () => {
        const user = await User.findOne({ _id: receiver_id }).exec();
        const transaction = new Transaction({
          _id: new Mongoose.Types.ObjectId(),
          amount: amountToSend,
          createdAt: new Date().toDateString(),
          fromId: userId,
          toId: receiver_id,
          toName: user.names,
          fromName: data.user.names,
          status: 'Outgoing',
          action: `Sending ${amountToSend} RWF to ${user.names}`,
        });

        transaction
          .save()
          .then(() => {
            res.status(201).json({
              message: 'You have sent money successful',
              status: 201,
            })
          }).catch((err) => {
            res.status(500).json({
              message: 'Something went wrong',
              status: 500,
              error: err
            });
          })
      }).catch((err) => {
        res.status(500).json({
          message: 'Something went wrong',
          status: 500,
          error: err
        });
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Something went wrong',
        status: 500,
        error: err
      });
    })
  }

}

export default TransactionsController