// /src/middleware/auth.js
const jwt = require('jsonwebtoken');

// Middleware para verificar o token
const verifyToken = (req, res, next) => {
  // Obtém o token do cabeçalho da requisição
  const token = req.header('Authorization');
  
  // Verifica se o token está presente
  if (!token) return res.status(401).send('Acesso negado');

  try {
    // Verifica se o token é válido
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    // Adiciona os dados do usuário ao objeto req
    req.user = verified;
    
    // Passa para o próximo middleware ou rota
    next();
  } catch (err) {
    res.status(400).send('Token inválido');
  }
};


module.exports = { verifyToken };
