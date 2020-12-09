const multer = require('multer');
const database = require('../database/connection');
const multerConfig = require('../config/multer');
const { isEmpty } = require('../utils');

module.exports = {

  create: async (req, res) => {

    const upload = multer(multerConfig).single('file');

    return upload(req, res, async err => {

      if (err) return res.json({
        success: false,
        message: 'Erro ao fazer upload de imagem: ' + err.toString()
      });

      const { title, lat, lng, guidance } = req.body;

      if (isEmpty(title, lat, lng, guidance, req.file)) return res.json({
        success: false,
        message: 'Os campos título, latitude, longitude, imagem e orientação são obrigatórios',
      });

      const [id] = await database('points').insert({
        title,
        lat,
        lng,
        guidance,
        image: `http://localhost:3001/images/${req.file.filename}`
      });

      if (id) return res.json({
        success: true,
        message: 'Ponto de distribuição adicionado com sucesso!',
        point: {
          id,
          title,
          lat,
          lng,
          guidance,
          image: `http://localhost:3001/images/${req.file.filename}`
        }
      });

      return res.json({
        success: false,
        message: 'Ocorreu um erro ao adicionar um ponto de distribuição'
      });
    });
  },

  index: async (req, res) => {

    const points = await database('points').select(['*']);

    return res.json({
      success: true,
      message: 'OK',
      points
    });
  }
}