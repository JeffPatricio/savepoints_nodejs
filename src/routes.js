const express = require('express');
const path = require('path');
const PointController = require('./controllers/PointController');
const authMiddleware = require('./middlewares/auth');
const routes = express.Router();

routes.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));

routes.use(authMiddleware);

routes.post('/points', PointController.create);
routes.get('/points', PointController.index);

routes.use((error, req, res, next) => {
  console.log(error);
  return res.json({
    success: false,
    message: 'Erro interno no servidor'
  });
});

module.exports = routes;