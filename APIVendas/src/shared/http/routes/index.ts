import productsRouter from '@config/products/routes/products.routes';
import sessionsRouter from '@config/users/routes/sessions.routes';
import usersRouter from '@config/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/api/v1/products', productsRouter);
routes.use('/api/v1/users', usersRouter);
routes.use('/api/v1/sessions', sessionsRouter);

export default routes;