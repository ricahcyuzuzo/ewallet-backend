import Router from 'express';
import TransactionController from '../controllers/transactions.controllers';

const routes = Router();

routes.post('/account', TransactionController.createAccount);
routes.patch('/recharge', TransactionController.recharge);
routes.post('/pay', TransactionController.pay);
routes.get('/transactions', TransactionController.getTransactions);
routes.post('/send', TransactionController.sendMoney);

export default routes;
