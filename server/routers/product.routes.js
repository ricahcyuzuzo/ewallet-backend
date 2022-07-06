import Router from 'express';
import ProductController from '../controllers/product.controllers';

const routes = Router();

routes.post('/add-product', ProductController.addProduct);
routes.get('/products', ProductController.getAllProductsBuUser);

export default routes;
