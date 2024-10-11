import { Router } from 'express';

const routes = Router();

routes.get('/', (request: any, response: any) => {
  return response.json({ message: 'Hello dev!' });
});

export default routes;