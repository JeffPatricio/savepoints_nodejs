const auth = async (req, res, next) => {

  const authHeader = req.headers.auth_api;

  if (authHeader !== '75f886a942b02d6ad0cb9b55ed94f480') return res.json({
    success: false,
    message: 'Acesso não permitido'
  });

  return next();
}

module.exports = auth;