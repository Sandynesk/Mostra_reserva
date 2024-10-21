// /src/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUser, createUser } = require('../modules/userQueries');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Rota de login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
      // Utiliza a versão refatorada de findUser que retorna uma Promise
      const user = await findUser(username);

      if (!user) {
          return res.status(401).send('Usuário não encontrado');
      }

      // Verifica a senha
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).send('Senha incorreta'); // Aqui retorna 401 se a senha estiver incorreta
      }

      // Gera o token JWT
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Resposta com o token JWT
      res.json({ token });

  } catch (err) {
      console.error('Erro no servidor:', err);
      res.status(500).send('Erro no servidor');
  }
});

  

// Rota de cadastro
router.post('/cadastro', async (req, res) => {
    body('username').notEmpty().withMessage('Usuário é obrigatório'),
    body('email').isEmail().withMessage('Email inválido')
    const { username, email, gender, password } = req.body;
  
    try {
      // Verifica se o usuário já existe
      const user = await findUser(username);
      if (user) {
        console.log('Usuário já existe:', user.username);
        return res.status(400).send('Usuário já existe');
    }
    

      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criação do usuário
      const newUser = await createUser(username, email, gender, hashedPassword);

      
      // Verifica se o usuário foi criado com sucesso
      if (newUser) {
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Usuario foi criado com sucesso');
        return res.status(201).json({ message: 'Usuário criado com sucesso', token });  
        
      } else {
          return res.status(500).send('Erro ao criar o usuário');
      }
  } catch (err) {
      console.error('Erro no servidor:', err);
      res.status(500).send('Erro no servidor');
  }
});





module.exports = router;
