import productsRouter from '@config/products/routes/products.routes';
import usersRouter from '@config/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/api/v1/products', productsRouter);
routes.use('/api/v1/users', usersRouter);

export default routes;