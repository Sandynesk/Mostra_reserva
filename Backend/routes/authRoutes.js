// /src/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUser, createUser } = require('../modules/userQueries');


const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    findUser(username, async (err, user) => {
      if (err) return res.status(500).send('Erro no servidor');
      if (!user) return res.status(401).send('Usuário não encontrado');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).send('Senha incorreta');

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});

// Rota de cadastro
router.post('/cadastro', async (req, res) => {
  const { username, email, gender, password } = req.body;
  try {
    findUser(username, async (err, user) => {
      if (err) return res.status(500).send('Erro no servidor');
      if (user) return res.status(400).send('Usuário já existe');

      const hashedPassword = await bcrypt.hash(password, 10);
      createUser(username, email, gender, hashedPassword, (err) => {
        if (err) return res.status(500).send('Erro ao criar usuário');
        res.status(201).send('Usuário criado com sucesso');
      });
    });
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
