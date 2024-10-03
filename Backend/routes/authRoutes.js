const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController'); // Importa controladores

const router = express.Router();

// Definir rotas de autenticação
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
