import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    status: 'ok',
    data: 'Hello world!!!',
  });
});

export default routes;
