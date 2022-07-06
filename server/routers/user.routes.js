import Router from 'express';
import Authentication from '../controllers/auth.controllers';
const routes = Router();

routes.post('/user', Authentication.signup);
routes.post('/login', Authentication.signin);

export default routes;
