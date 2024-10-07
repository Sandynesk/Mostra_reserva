// /src/routes/userRoutes.js
const express = require('express');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Rota protegida
router.get('/protected', verifyToken, (req, res) => {
  res.send('Acesso permitido');
});

module.exports = router;
